<script setup>
import { ref } from 'vue'
import firebase from "firebase/compat";
import router from "@/router";

const email = ref('')
const password = ref('')
const errMsg = ref()

function login() {
  firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(date => {
        console.log('Successfully log in!')
        router.push('/feed')
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = 'Invalid email'
            break
          case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found'
            break
          case 'auth/wrong-password':
            errMsg.value = 'Incorrect Password'
            break
          default:
            errMsg.value = 'Email or Password was incorrect'
        }
      })
}
</script>

<template>
  <h1>Create an account</h1>
  <form @submit.prevent="login">
    <div>
      <label for="email">Email</label>
      <input type="text" v-model="email" placeholder="Email">
    </div>

    <div>
      <label for="password">Password</label>
      <input type="password" v-model="password" placeholder="Password">
    </div>

    <div v-if="errMsg">
      <p>{{ errMsg }}</p>
    </div>

    <button type="submit">Login</button>
  </form>
</template>

<style scoped>

</style>