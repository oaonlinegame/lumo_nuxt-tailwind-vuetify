<template>
  <div class="relative inline-block text-left">
    <button @click="toggleDropwonn" class="bg-slate-500 rounded-md inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-500 focus:ring-white" id="options-menu" aria-haspopup="true" aria-expanded="true">
      openDropdown
      <a class="fas fa-angle-down" v-if="isOpen"></a>
    </button>
    <div v-if="isOpen" class="flex flex-col bg-blue-200 rounded-md absolute mt-2">
      <div class="pt-2" v-for="item in items" :key="item.name">
        <option class="">{{ item.name }}</option>
      </div>
    </div>
  </div>
</template>
<script>
import { data } from "autoprefixer";

export default {
  data() {
    return {
      // Add your data here
      items: [
        {
          name: "test1",
          value: "test"
        },
        {
          name: "test2",
          value: "test"
        },
        {
          name: "test3",
          value: "test"
        }
      ],
      isOpen: false
    };
  },
  methods: {
    toggleDropwonn(e) {
      this.isOpen = !this.isOpen;
    }
    // Add your methods here
  },
  mounted(event) {
    // Add your code here
  }
};
</script>
