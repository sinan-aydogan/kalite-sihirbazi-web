// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
      '@pinia/nuxt',
      "nuxt-icon",
      "@pinia-plugin-persistedstate/nuxt",
      "radix-vue"
    ]
})