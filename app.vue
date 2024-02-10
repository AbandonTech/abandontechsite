<template>
    <Navbar />
    <div class="pb-20"/>
    <NuxtPage />
</template>

<script setup>
  useHead({
    bodyAttrs: {
      class: "bg-base-100 text-primary-content"
    }
  })
</script>
