// filepath: /c:/Users/Siripong/Desktop/Project/lumo/lumotailwind/lumo/nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-free/css/all.css",
    "material-design-icons-iconfont/dist/material-design-icons.css",
    "vuetify/styles",
    "@/assets/styles/global.css",
    "@mdi/font/css/materialdesignicons.css"
  ],
  build: {
    transpile: ["vuetify"]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  plugins: ["~/plugins/vuetify.js"]
});
