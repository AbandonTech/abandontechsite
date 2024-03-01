<template>
  <div class="flex flex-col min-h-screen">
    <Navbar class="hidden lg:flex" />
    <NuxtPage />
    <div class="grow" />
    <Footer />
    <BottomNav class="lg:hidden" />

  </div>
</template>

<script setup>
  useHead({
    bodyAttrs: {
      class: "bg-base-100 text-primary-content"
    }
  })
</script>
