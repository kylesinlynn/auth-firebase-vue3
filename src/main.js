import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import firebase from "firebase/compat";

let firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}

firebase.initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
