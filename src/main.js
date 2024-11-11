import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importa tu archivo de rutas

createApp(App)
  .use(router)  // Asegúrate de usar Vue Router
  .mount('#app');
