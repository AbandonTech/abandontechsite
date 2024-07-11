// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: process.env.baseUrl
    }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  css: ["/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "nuxt-gtag"],

  gtag: {
    id: 'G-S3TTG0RJWW'
  },

  tailwindcss: {
    exposeConfig: true,
  },
  app: {
    head: {
      title: "AbandonTech",
      htmlAttrs: {
        lang: 'en',
      }
    }
  },
})