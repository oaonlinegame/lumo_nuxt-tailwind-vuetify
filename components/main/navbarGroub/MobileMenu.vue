<template>
  <div class="flex flex-col">
    <div class="flex justify-evenly items-center px-4 h-12">
      <!-- เมนูแบบไอคอน -->
      <button
        v-for="(item, index) in items"
        :key="index"
        @click="toggleDropdown(index)"
        class="text-xl text-black hover:bg-gray-300 rounded-full transition-colors duration-300 py-2 px-3 focus:outline-none"
      >
        <i :class="item.icon"></i>
      </button>
      <!-- กล่องค้นหา -->
      <div class="relative flex items-center">
        <input
          type="text"
          class="text-black px-4 py-2 rounded-l-lg focus:outline-none text-sm h-10 hidden md:block"
          placeholder="Search..."
          v-model="search"
          @keydown="search_value"
        />
        <button class="text-black px-4 py-2 rounded-full flex items-center justify-center h-10 hover:bg-gray-300">
          <i class="fas fa-magnifying-glass text-lg"></i>
        </button>
      </div>
    </div>

    <Dropdown v-if="opendropdown"></Dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      opendropdown: false,
      items: [
        {
          name: "Notification",
          icon: "mdi mdi-bell",
          notifications: 15,
          subItems: [{ name: "SubItem 2-1" }, { name: "SubItem 2-2" }]
        },
        {
          name: "Setting",
          icon: "mdi mdi-cog",
          notifications: 105,
          subItems: [{ name: "SubItem 3-1" }, { name: "SubItem 3-2" }]
        },
        {
          name: "Chat",
          icon: "mdi mdi-chat-processing-outline",
          notifications: 5,
          subItems: [{ name: "SubItem 1-1" }, { name: "SubItem 1-2" }]
        }
      ]
    };
  },
  methods: {
    search_value() {
      console.log(this.search);
    },
    toggleDropdown(v) {
      this.opendropdown = !this.opendropdown;
    }
  }
};
</script>
