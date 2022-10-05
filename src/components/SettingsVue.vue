<template>
  <v-app-bar app color="grey">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title>SHI-Institut</v-app-bar-title>

    <v-spacer></v-spacer>
    <v-btn icon>
      <v-avatar large rounded><span class="text-h4">CJ</span> </v-avatar>
    </v-btn>
  </v-app-bar>

  <div class="mt-8 pa-4" outlined tile>
    <h1>Einstellungen</h1>
    <h2>Geben Sie hier bitte Ihren vollständigen Namen ein</h2>
    <v-text-field label="Vorname" v-model="first"> </v-text-field>
    <v-text-field label="Nachname" v-model="last"> </v-text-field>
    <h2 v-if="user.length > 1">Vielen Dank!</h2>
    <h2 v-else></h2>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNameStore } from "../stores/names";
import { storeToRefs } from "pinia";

const nameStore = useNameStore();
const { fullname: user } = storeToRefs(nameStore);
const { firstname: first } = storeToRefs(nameStore);
const { lastname: last } = storeToRefs(nameStore);
</script>
