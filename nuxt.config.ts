// nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n/nuxt" // ใช้ @nuxtjs/i18n/nuxt
    // ... อื่นๆ
  ],

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
  plugins: ["~/plugins/vuetify.js", "~/plugins/i18n.ts"] //เพิ่ม plugins i18n เข้าไปด้วย
});
