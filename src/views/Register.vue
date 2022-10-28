<script setup>
import { ref } from 'vue'
import firebase from "firebase/compat"
import router from "@/router"

const email = ref('')
const password = ref('')
const errMsg = ref()

function register() {
  firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then(date => {
        console.log('Successfully registered!')
        router.push('/feed')
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message)
      })
}
</script>

<template>
  <h1>Create an account</h1>
  <form @submit.prevent="register">
    <div>
      <label for="email">Email</label>
      <input type="text" v-model="email" placeholder="Email">
    </div>

    <div>
      <label for="password">Password</label>
      <input type="password" v-model="password" placeholder="Password">
    </div>

    <button type="submit">Register</button>
  </form>
</template>

<style scoped>

</style>