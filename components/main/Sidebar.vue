<template>
  <aside class="md:w-64 bg-gray-200 p-4 mb-4 md:mb-0 fixed top-14 left-0 h-screen overflow-y-auto pb-20">
    <div>
      <h2 class="text-lg font-semibold mb-2 text-center md:text-left">Side Bar</h2>
      <ul class="text-center md:text-left">
        <li v-for="menu in 30" :key="menu">
          <a href="#" class="block py-2 hover:bg-gray-300 rounded">เมนู {{ menu }}</a>
        </li>
      </ul>
    </div>
  </aside>
</template>
