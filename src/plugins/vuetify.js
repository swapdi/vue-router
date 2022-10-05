// Styles
import "@mdi/font/css/materialdesignicons.css";
import vuetify from "vite-plugin-vuetify";

// Vuetify
import { createVuetify } from "vuetify";
import { mdi } from "vuetify/iconsets/mdi";
import { aliases, fa } from "vuetify/iconsets/fa";

export default createVuetify({
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
});

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
