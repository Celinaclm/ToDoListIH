import { createApp } from 'vue';
import './static/main.css';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

createApp(App).use(router).use(createPinia()).mount('#app');
