import RedTheme from '~/assets/js/red.js'
import YellowTheme from '~/assets/js/yellow.js'
import GrayTheme from '~/assets/js/gray.js'
import BrownTheme from '~/assets/js/brown.js'
import BlueTheme from '~/assets/js/blue.js'
import GreenTheme from '~/assets/js/green.js'

export const useColorTheme = async (selected) => {
    let theme;
    if (selected) {
        switch (selected) {
            case 'red':
                theme = RedTheme;
                break;
            case 'yellow':
                theme = YellowTheme;
                break;
            case 'gray':
                theme = GrayTheme;
                break;
            case 'brown':
                theme = BrownTheme;
                break;
            case 'blue':
                theme = BlueTheme;
                break;
            case 'green':
                theme = GreenTheme;
                break;
        }
    }

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
}