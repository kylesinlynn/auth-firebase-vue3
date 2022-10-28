<script setup>
import firebase from "firebase/compat";
import {onBeforeUnmount} from "vue";
import router from "@/router";

const authListener = firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    alert('You must logged in')
    router.push('/sign-in')
  }
})

onBeforeUnmount(() => {
  authListener()
})
</script>

<template>
  <h1>Feed</h1>
  <p>This page is for users only!</p>
</template>

<style scoped>

</style>