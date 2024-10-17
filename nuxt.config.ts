//nuxt.config.ts
export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],

  // Registra apenas o MirageJS como plugin adicional
  plugins: ["~/plugins/mirage.ts"],

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", ],

  compatibilityDate: "2024-10-16",
});
