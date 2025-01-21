import { defineNuxtConfig } from "nuxt/config";
import { VitePWA } from "vite-plugin-pwa";

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
  plugins: ["~/plugins/vuetify.js"],
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate", // ตัวเลือกในการทำ Auto Update สำหรับ Service Worker
        manifest: {
          name: "Lumo App",
          short_name: "Lumo",
          description: "Your awesome PWA app",
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#000000"
        }
      })
    ]
  }
});
