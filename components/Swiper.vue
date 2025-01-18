<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in items" :key="index" class="swiper-slide">
        {{ item.name }}
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const items = ref([
  { name: "Slide 1" },
  { name: "Slide 2" },
  { name: "Slide 3" },
  { name: "Slide 4" },
  { name: "Slide 5" },
  { name: "Slide 6" },
  { name: "Slide 7" },
  { name: "Slide 8" },
]);
</script>
