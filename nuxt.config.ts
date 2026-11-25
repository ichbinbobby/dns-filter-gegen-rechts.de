// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ui: {
    fonts: false
  },
  app: {
    head: {
      htmlAttrs: { lang: 'de' }
    }
  }
})
