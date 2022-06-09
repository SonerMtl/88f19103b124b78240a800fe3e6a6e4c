import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import { createPinia } from 'pinia'




const app = createApp(App);
app.use(createPinia());
app.use(router).mount('#app');
