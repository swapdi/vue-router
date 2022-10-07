<template>
  <v-app-bar app color="grey">
    <v-app-bar-nav-icon variant="text"></v-app-bar-nav-icon>
    <v-icon>mdi-account</v-icon>
    <v-app-bar-title>SHI-Institut</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu app v-model="menu">
      <template v-slot:activator="{ on, attrs }">
        <v-btn @click="menu = !menu"> CJ </v-btn>
      </template>
      <v-card>
        <v-divider></v-divider>
        <v-card-text>TEST</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="menu = false"> Cancel </v-btn>
          <v-btn color="primary" text @click="menu = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-app-bar>

  <div class="mt-8 pa-4" outlined tile>
    <h1>Einstellungen</h1>
    <h2>Geben Sie hier bitte Ihren vollständigen Namen ein</h2>
    <v-icon>mdi-account</v-icon>
    <v-text-field label="Vorname" v-model="first"> </v-text-field>
    <v-text-field label="Nachname" v-model="last"> </v-text-field>
    <h2 v-if="user.length > 1">Vielen Dank!</h2>
    <h2 v-else></h2>
  </div>
</template>

<script setup>
import { useNameStore } from "../stores/names";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const nameStore = useNameStore();
const { fullname: user } = storeToRefs(nameStore);
const { firstname: first } = storeToRefs(nameStore);
const { lastname: last } = storeToRefs(nameStore);

const menu = ref(false);
</script>
