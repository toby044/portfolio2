// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Themes from './app/assets/js/themes';

export default defineNuxtConfig({

  devtools: { enabled: true },
  experimental: {
    entryImportMap: false
  },
  app: {
    pageTransition: { name: 'page' },
    head: {
      script: [
        {
          innerHTML: `
            (function() {
              try {
                const cookieMatch = document.cookie.match(/color-theme=([^;]+)/);
                const themeName = cookieMatch ? decodeURIComponent(cookieMatch[1]) : "brown";
                document.documentElement.setAttribute("data-theme", themeName);
              } catch (e) {
                console.warn("Theme preload failed", e);
              }
            })();
          `,
          tagPosition: "head",
        },
      ],
    },
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
          theme: "github-dark-high-contrast"
        }
      }
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});