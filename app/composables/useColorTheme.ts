import type { Theme } from '~/types/theme';
import Themes from '~/assets/js/themes';

export const useColorTheme = async (selected: string): Promise<void> => {
  const theme: Theme | undefined = Themes.find((t) => t.name === selected);

  if (!theme) {
    console.warn(`Theme "${selected}" not found, using default`);
    return;
  }

  if (import.meta.client) {
    document.documentElement.setAttribute("data-theme", theme.name);
  }

  const cookieTheme = useCookie('color-theme');
  cookieTheme.value = theme.name;
};