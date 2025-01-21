<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />

    <div class="flex flex-col md:flex-row flex-1">
      <Sidebar />

      <div class="md:ml-64 w-full">
        <Content />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style></style>
