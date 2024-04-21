<template>
  <div class="flex flex-col min-h-screen">
    <Navbar class="hidden lg:flex" />
    <div class="lg:mt-20"></div>
    <NuxtPage />
    <div class="grow"></div>
    <Footer></Footer>
    <BottomNav class="lg:hidden" />

  </div>
</template>

<script setup>
import verticalLogoColor from "/img/logoVerticalColor.png"

const runtimeConfig = useRuntimeConfig()
  useHead({
    bodyAttrs: {
      class: "bg-base-100 text-primary-content"
    }
  })

  useSeoMeta({
    title: "AbandonTech",
    ogTitle: "AbandonTech",
    description: "Empowering Businesses Through Technology",
    ogDescription: "Empowering Businesses Through Technology",
    ogImage: runtimeConfig.public.baseUrl + verticalLogoColor,
    twitterCard: "summary_large_image",
    themeColor: "#1A67D7"
})
</script>
