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
import logoColor from "/img/logoColor.png"

const runtimeConfig = useRuntimeConfig()
  useHead({
    bodyAttrs: {
      class: "bg-base-100 text-primary-content"
    },
    link: [
    {
      rel: "preload",
      href: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap",
      as: "font",
    },
    {
      rel: "preload",
      href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
      as: "font",
    }
  ]
  })

  useSeoMeta({
    title: "AbandonTech",
    ogTitle: "AbandonTech",
    description: "Empowering Businesses Through Technology",
    ogDescription: "Empowering Businesses Through Technology",
    ogImage: runtimeConfig.public.baseUrl + logoColor,
    twitterCard: "summary_large_image",
    themeColor: "#1A67D7"
})
</script>
