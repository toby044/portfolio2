// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  components: [
    '~/components',
    { path: '~/components/content', pathPrefix: false },
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
  ],
  css: ['~/assets/css/main.css'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})