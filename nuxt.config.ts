import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@vueuse/nuxt"],
  vite: {
    build: { assetsInlineLimit: 0 },
  },
});
