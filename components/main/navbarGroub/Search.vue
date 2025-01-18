<template>
  <div class="d-flex justify-center">
    <!-- Search Bar -->
    <v-container class="pa-0 d-flex align-center">
      <v-text-field
        v-model="search"
        label="Search..."
        variant="plain"
        dense
        clearable
        clear-icon="mdi-close"
        hide-details
        class="search-bar"
        append-inner-icon="mdi-magnify"
        @keydown.enter="searchValue"
        @click:append-inner="searchValue"
      ></v-text-field>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "" // เก็บค่าค้นหา
    };
  },
  methods: {
    searchValue() {
      console.log("Searching:", this.search); // แสดงค่าค้นหาใน console
    }
  }
};
</script>

<style scoped>
/* ปรับแต่งสไตล์ */
.search-bar {
  max-width: 400px;
}
</style>
