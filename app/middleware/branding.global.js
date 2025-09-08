import themes from '~/assets/js/themes/themes.js';

export default defineNuxtRouteMiddleware((to, from) => {
  const query = to.query;
  const theme = query.theme;
  const themeCookie = useCookie("color-theme");
  console.log("Theme:", theme);
  console.log("Theme Cookie:", themeCookie.value);
  //   let changed = false;
  //   const validLogos = [
  //     "lego",
  //     "sallinggroup",
  //     "maersk",
  //     "novicell",
  //     "netcompany",
  //   ];
    if (theme && themes.find((t) => t.name === theme && t.custom === true)) {
      console.log("Changing theme to:", theme);
      useColorTheme(theme);
    }
});
