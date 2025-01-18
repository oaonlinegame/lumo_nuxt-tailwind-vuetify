// filepath: /C:/Users/Siripong/Desktop/Project/lumo/lumotailwind/lumo/components/main/navbarGroub/Dropdown.vue
<template>
  <div
    v-if="visible"
    class="absolute bg-white shadow-md p-4 rounded-xl mt-14 max-h-60 overflow-y-auto transition-all duration-300 ease-in-out transform min-w-[144px]"
    :class="{
      'opacity-100 translate-y-0': visible,
      'opacity-0 translate-y-4': !visible
    }"
  >
    <div class="py-1" v-for="(subItem, subIndex) in subItems" :key="subIndex">
      <a href="#" class="hover:text-blue-500">{{ subItem.name }}</a>
      <div v-if="subIndex < subItems.length - 1" class="border-t border-gray-300 my-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    subItems: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
/* CSS ไว้ปรับแต่งเพิ่มเติมหากต้องการ */
</style>
