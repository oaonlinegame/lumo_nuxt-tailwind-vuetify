<template>
  <div class="flex justify-center items-center">
    <button
      @click="toggleLanguage"
      class="flex flex-col items-center bg-transparent border-none p-2 hover:bg-gray-200 rounded-lg"
    >
      <img :src="currentLocaleData?.flag" class="rounded-sm" width="60" height="60" alt="Flag" />
      <span class="mt-2 text-sm">{{ currentLocaleData?.code.toUpperCase() }}</span>
    </button>
  </div>
</template>

<script setup>
import { useNuxtApp } from "#app";
import { ref, computed, onMounted } from "vue";

// รายชื่อภาษาและธงชาติ
const locales = [
  { code: "en", flag: "https://flagcdn.com/w40/us.png" }, // ธงชาติอเมริกา
  { code: "th", flag: "https://flagcdn.com/w40/th.png" } // ธงชาติไทย
];

const { $translator } = useNuxtApp(); // ใช้ translator จาก plugin
const currentLocale = ref($translator.getLocale()); // เก็บภาษาปัจจุบัน

// หาข้อมูลของภาษาปัจจุบัน
const currentLocaleData = computed(() => locales.find((locale) => locale.code === currentLocale.value));

// ฟังก์ชันเปลี่ยนภาษา
const toggleLanguage = async () => {
  const currentIndex = locales.findIndex((locale) => locale.code === currentLocale.value);
  const nextIndex = (currentIndex + 1) % locales.length; // สลับไปยังภาษาถัดไป
  const nextLocale = locales[nextIndex].code;

  await $translator.setLocale(nextLocale); // เปลี่ยนภาษาใน plugin
  currentLocale.value = nextLocale; // อัปเดตภาษาปัจจุบัน
};

onMounted(() => {
  // ทำให้แน่ใจว่าไคลเอนต์ใช้ข้อมูลที่ถูกต้องในการ render
  currentLocale.value = $translator.getLocale();
});
</script>

<style scoped>
/* ซ่อนเงาเมื่อ hover และ active */
</style>
