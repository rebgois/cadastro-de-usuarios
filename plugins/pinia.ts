import { createPinia } from 'pinia'; // Importa o Pinia, uma biblioteca de gerenciamento de estado

// Define um plugin do Nuxt para registrar o Pinia na aplicação
export default defineNuxtPlugin((nuxtApp) => {
  // Adiciona o Pinia ao Vue app, permitindo o uso de stores em toda a aplicação
  nuxtApp.vueApp.use(createPinia());
});
