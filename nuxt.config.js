// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
    preview: true,

  },

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
      gitInfo: {
        name: 'portfolio2',
        owner: 'toby044',
        url: 'https://github.com/toby044/portfolio2/'
      }
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})