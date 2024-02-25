<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="pb-20" />
    <NuxtPage />
    <div class="grow" />
    <Footer />

  </div>
</template>

<script setup>
  useHead({
    bodyAttrs: {
      class: "bg-base-100 text-primary-content"
    }
  })
</script>
