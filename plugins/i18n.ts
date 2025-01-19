import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import th from "../locales/th.json";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false, // ให้แน่ใจว่าใช้ Composition API
    globalInjection: true,
    locale: "en", // ภาษาเริ่มต้น
    fallbackLocale: "en", // ภาษาสำรอง
    messages: {
      en,
      th
    }
  });

  vueApp.use(i18n);
});
