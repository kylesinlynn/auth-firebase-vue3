<script setup>
import { RouterLink, RouterView } from 'vue-router'
import firebase from "firebase/compat";
import {ref} from "vue";
import router from "@/router";

const isLoggedIn = ref(true)

firebase.auth().onAuthStateChanged(user => user ? isLoggedIn.value = true: isLoggedIn.value = false)

function signOut() {
  firebase.auth().signOut()
  router.push('/')
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <span v-if="isLoggedIn">
          <router-link :to="{ name: 'feed' }">Feed</router-link> |
        </span>
        <span v-if="isLoggedIn">
          <button @click="signOut">Logout</button>
        </span>
        <span v-else>
          <router-link :to="{ name: 'register' }">Register</router-link> |
          <router-link :to="{ name: 'login' }">Login</router-link>
        </span>
      </nav>
    </div>
  </header>

  <router-view />
</template>

<style scoped>

</style>