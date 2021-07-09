import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import GoogleMap from 'googlemaps-vue3'

import '@/style/global.scss'

createApp(App)
.use(store)
.use(GoogleMap, {apiKey: process.env.VUE_APP_G_KEY})
.mount("#app");
