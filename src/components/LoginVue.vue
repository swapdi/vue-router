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
        <v-btn outlined color="green" rounded text>Login</v-btn>
        <v-btn outlined color="black" rounded text>Anmelden mit Keycloak</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script setup>
import { ref } from "vue";
const username = ref("");
const password = ref("");
</script>
