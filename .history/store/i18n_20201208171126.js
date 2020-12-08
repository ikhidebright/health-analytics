export const state = () => ({
  locales: ["en", "vi"],
  // locales: ["en", "vi", "fr", "es"],
  locale: "en"
});

export const mutations = {
  SET_LANG(state, locale) {
    console.log("locale", state.locales.locale !== -1);
    // if (state.locales.indexOf(locale) !== -1) {
    //   state.locale = locale;
    // }
  }
};
