import { useColorTheme } from '~/composables/useColorTheme'

export default defineNuxtPlugin((nuxtApp) => {
  const themeCookie = useCookie('color-theme')
  const theme = useColorTheme(themeCookie.value || 'brown')

  // ✅ On server: inject CSS variables into <html>
  if (import.meta.server) {
    nuxtApp.ssrContext!.head = nuxtApp.ssrContext!.head || {}
    nuxtApp.ssrContext!.head.htmlAttrs = {
      ...(nuxtApp.ssrContext!.head.htmlAttrs || {}),
      style: `
        --theme-main: rgb(${theme.main});
        --theme-background: rgb(${theme.background});
        --theme-background-opacity: rgba(${theme.main}, 0.07);
      `
    }
  }
})