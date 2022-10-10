<template>
  <v-container>
    <v-card>
      <v-card-title> Login </v-card-title>
      <hr />
      <v-card-text>
        <v-text-field label="Benutzername" v-model="username"> </v-text-field>
        <v-text-field label="Passwort" v-model="password"></v-text-field>
      </v-card-text>

      <v-card-actions>
        <router-link to="/" v-slot="{ href, navigate }">
          <v-btn
            plain
            :href="href"
            @click="navigate"
            outlined
            color="green"
            rounded
            >Login</v-btn
          ></router-link
        >
        <v-btn outlined color="black" rounded text>Anmelden mit Keycloak</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const authStore = useAuthStore();

const { username } = storeToRefs(authStore);
const { password } = storeToRefs(authStore);
</script>
