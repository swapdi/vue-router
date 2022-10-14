import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import VueDraggable from "vuedraggable";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
/* import "vuetify/styles"; */

const pinia = createPinia();
const i18n = createI18n({
  locale: "Deutsch",
  messages: {
    Englisch: {
      message: {
        hallo: "Hello",
        willkommen: "Welcome",
        nameneingeben: "Please insert your full name",
      },
      options: {
        profil: "Profile",
        einstellungen: "Settings",
        kontakt: "Contact",
        abmelden: "Logout",
        vorname: "Firstname",
        nachname: "Lastname",
      },
    },
    Deutsch: {
      message: {
        hallo: "Hallo",
        willkommen: "Herzlich Willkommen",
        nameneingeben: "Geben Sie hier bitte Ihren vollständigen Namen ein",
      },
      options: {
        profil: "Profil",
        einstellungen: "Einstellungen",
        kontakt: "Kontakt",
        abmelden: "Abmelden",
        vorname: "Vorname",
        nachname: "Nachname",
      },
    },
  },
});

createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .use(VueDraggable)
  .use(i18n)
  .mount("#app");
