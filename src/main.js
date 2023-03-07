import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routers/router'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const store = createPinia()

createApp(App).use(router).use(store).mount('#app')
