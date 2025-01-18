<template>
  <button :class="`px-4 py-2 rounded font-bold text-white ${bgColor}`">
    <slot>Default Button</slot>
    <!-- Slot สำหรับข้อความ -->
  </button>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String, // รับสีพื้นหลัง
      default: "bg-blue-500 hover:bg-blue-600",
    },
  },
};
</script>
