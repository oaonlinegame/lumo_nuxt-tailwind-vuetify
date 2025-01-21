<template>
  <div class="flex items-center">
    <!-- คอลัมน์ซ้าย: LOGO + ชื่อเว็บ -->
    <div class="flex items-center space-x-2">
      <button class="fas fa-bars p-3 text-2xl rounded-md hover:bg-gray-200 focus:outline-none"></button>
      <svg class="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          fill="currentColor"
        />
        <path d="M11 14h2v2h-2zm0-8h2v6h-2z" fill="currentColor" />
      </svg>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/768px-LINE_logo.svg.png"
        alt="Logo"
        class="h-10 w-10 rounded-full"
      />
      <span class="text-black text-lg font-semibold">MyWebsite</span>
    </div>
  </div>
</template>
