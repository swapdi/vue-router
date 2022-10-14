// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "myCustomTheme",
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          primary: "595959",
          secondary: "6B0F1A",
          accent: "6B0F1A",
          error: "#ff5722",
          warning: "#f44336",
          info: "#4caf50",
          success: "#009688",
        },
      },
    },
  },
});

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
