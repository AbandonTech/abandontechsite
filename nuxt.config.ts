// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  css: ["/assets/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  tailwindcss: {
    exposeConfig: true,
  },
  app: {
    head: {
      title: "AbandonTech",
    }
  }
})