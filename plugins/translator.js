export default defineNuxtPlugin(async () => {
  const translations = {
    en: () => import("@/locales/en.json"),
    th: () => import("@/locales/th.json")
  };

  let currentLocale = "en"; // ค่าเริ่มต้นภาษา

  // โหลดข้อความแปล
  const loadTranslations = async (locale) => {
    if (!translations[locale]) {
      console.warn(`Locale "${locale}" not found. Falling back to default.`);
      locale = "en";
    }
    currentLocale = locale;

    if (process.client) {
      localStorage.setItem("locale", locale); // บันทึกภาษาที่เลือก
    }

    return await translations[locale]();
  };

  // โหลด locale ค่าเริ่มต้น
  const savedLocale = process.client ? localStorage.getItem("locale") : null;
  const initialMessages = await loadTranslations(savedLocale || "en");

  // เก็บข้อความแปลใน state
  const messages = useState("messages", () => initialMessages);

  // ฟังก์ชันแปลคำ
  const t = (key) => {
    if (!messages.value) {
      console.warn("Translations not loaded yet.");
      return key;
    }
    if (!messages.value[key]) {
      console.warn(`Translation for key "${key}" not found.`);
      return key;
    }
    return messages.value[key];
  };

  return {
    provide: {
      translator: {
        setLocale: async (locale) => {
          const newMessages = await loadTranslations(locale);
          messages.value = newMessages; // รีเฟรชข้อความแปล
        },
        t,
        getLocale: () => currentLocale
      }
    }
  };
});
