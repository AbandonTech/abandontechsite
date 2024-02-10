// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  css: ["~/assets/css/main.css"],
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {
        cssPath: ["~/assets/css/main.css"]
      },
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "AbandonTech",
    }
  }
})
