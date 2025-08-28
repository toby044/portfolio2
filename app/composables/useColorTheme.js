import Themes from '~/assets/js/themes.js';

export const useColorTheme = async (selected) => {
    const theme = Themes.find((t) => t.name === selected);

    if (import.meta.client) {
        document.documentElement.style.setProperty(
            "--theme-main",
            `rgb(${theme.main})`
        );
        document.documentElement.style.setProperty(
            "--theme-background",
            `rgb(${theme.background})`
        );
        document.documentElement.style.setProperty(
            "--theme-background-opacity",
            `rgba(${theme.main}, 0.07)`
        );
    }

    const cookieTheme = useCookie('color-theme');
    cookieTheme.value = theme.name;
}