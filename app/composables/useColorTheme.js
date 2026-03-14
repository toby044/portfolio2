import themes from "~/assets/js/themes/themes.js";

export const useColorTheme = async (selected) => {
  const router = useRouter();
  const route = useRoute();
  const theme = themes.find((t) => t.name === selected);

  if (import.meta.client) {
    document.documentElement.setAttribute("data-theme", theme.name);

    const cookieTheme = useCookie("color-theme");
    cookieTheme.value = theme.name;

    if (route.query.theme) {
      const newQuery = { ...route.query };
      delete newQuery.theme;

      router.replace({ query: newQuery });
    }
  }
};
