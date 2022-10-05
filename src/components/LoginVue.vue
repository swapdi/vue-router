<template>
  <v-container>
    <v-card max-width="800" mx-auto>
      <v-card-title> Login </v-card-title>
      <hr />
      <v-text-field label="Benutzername" v-model="username"> </v-text-field>
      <v-text-field label="Passwort" v-model="password"> </v-text-field>
      <hr />
      <p>
        <v-btn outlined rounded text class="float left">Login</v-btn>
        <v-btn outlined rounded text class="float right"
          >Anmelden mit Keycloak</v-btn
        >
      </p>
    </v-card>
  </v-container>
</template>
<script setup>
import { ref } from "vue";
const username = ref("");
const password = ref("");
</script>
