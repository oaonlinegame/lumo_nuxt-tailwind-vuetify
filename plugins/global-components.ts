import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(async (nuxtApp) => {
  // ปรับ path ให้ตรงกับที่ตั้งจริง
  const components = import.meta.glob("/components/**/*.vue"); // ตั้งพาธให้ถูกต้อง

  for (const [path, resolver] of Object.entries(components)) {
    const componentName = path
      .split("/")
      .pop()
      ?.replace(/\.\w+$/, ""); // ดึงชื่อ component

    if (componentName) {
      const component = (await (resolver as () => Promise<{ default: any }>)()) as { default: any }; // ระบุประเภทของ resolver
      nuxtApp.vueApp.component(componentName, component.default);
    }
  }
});
