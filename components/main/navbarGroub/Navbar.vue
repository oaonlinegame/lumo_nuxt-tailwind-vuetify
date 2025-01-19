<template>
  <nav class="bg-white w-full fixed top-0 left-0 z-50 shadow-md">
    <!-- สำหรับหน้าจอขนาดใหญ่ (แถวเดียว) -->
    <div class="hidden md:grid grid-cols-3 items-center px-4 h-16 relative">
      <!-- คอลัมน์ซ้าย: LOGO + ชื่อเว็บ -->
      <logo></logo>

      <!-- คอลัมน์กลาง: ช่อง SEARCH -->
      <search></search>

      <!-- คอลัมน์ขวา: เมนู + Icon USER -->
      <div class="flex justify-end items-center space-x-6 relative">
        <!-- เมนู -->
        <Menu></Menu>
        <!-- ไอคอน User (อยู่ตลอด) -->
        <user></user>
        <button>EN</button>
      </div>
    </div>

    <!-- สำหรับหน้าจอขนาดเล็กกว่า md (2 แถว) -->
    <div class="block md:hidden">
      <!-- แถวที่ 1: Logo + User -->
      <div class="flex items-center justify-between px-4 h-16">
        <!-- LOGO -->
        <logo></logo>
        <user></user>
        <!-- Icon USER -->
      </div>

      <!-- แถวที่ 2: เมนูแบบไอคอน + Icon Search -->
      <MobileMenu></MobileMenu>
    </div>
  </nav>
</template>
