// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page' }
  },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    'nuxt-svgo',
  ],
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        italic: true
      }
    ]
  },
  css: ['~/assets/css/main.css'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
    build: {
      markdown: {
        highlight: {
          theme: "github-light-high-contrast"
        }
      }
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})