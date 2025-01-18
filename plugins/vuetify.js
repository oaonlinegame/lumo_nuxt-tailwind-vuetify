// filepath: /c:/Users/Siripong/Desktop/Project/lumo/lumotailwind/lumo/plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives
  });

  nuxtApp.vueApp.use(vuetify);
});
