import themes from '~/assets/js/themes.js';
import Themes from '~/assets/js/themes.js';

export const useColorTheme = async (selected) => {
    const theme = Themes.find((t) => t.name === selected);

    if (import.meta.client) {
        document.documentElement.setAttribute("data-theme", theme.name);
    }

    const cookieTheme = useCookie('color-theme');
    cookieTheme.value = theme.name;
}