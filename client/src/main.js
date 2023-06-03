// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')



// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import VueGoogleMaps from '@fawmi/vue-google-maps'
// const app = createApp(App)


// app.use(VueGoogleMaps, {
//     load: {
//         key: 'AIzaSyBKvc3oQF8Ef0yLOGXbL9-hHyvLc-LVfyc',
//         v: "weekly",
//         libraries: "places"
//         // language: 'de',
//     },
// }).mount('#app')

// app.mount('#app')

import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from './App.vue'

import vue3GoogleLogin from 'vue3-google-login'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

pinia.use(({ store }) => {
    store.router = markRaw(router)
})


app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: '852558868038-k8hgqgjeph79m94u9u331pf9baoqvhj4.apps.googleusercontent.com'
})
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBKvc3oQF8Ef0yLOGXbL9-hHyvLc-LVfyc',
        v: "weekly",
        libraries: "places"
    },
})

app.mount('#app')

