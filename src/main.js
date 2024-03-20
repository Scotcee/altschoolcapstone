import { createApp } from 'vue';
import './assets/style.css';
import router from './router';
import storeInstance from './store/index';
import App from './App.vue';

const app = createApp(App);

app.use(router).use(storeInstance).mount('#app');