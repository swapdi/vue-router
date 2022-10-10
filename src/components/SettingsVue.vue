<template>
  <v-app-bar app color="grey">
    <v-app-bar-nav-icon variant="text"></v-app-bar-nav-icon>

    <v-app-bar-title>SHI-Institut</v-app-bar-title>

    <v-spacer></v-spacer>
    <v-menu app v-model="menu">
      <template v-slot:activator="{ props }">
        <v-btn v-if="init.length > 0" v-bind="props" icon>{{ init }}</v-btn>
        <v-btn v-else v-bind="props" icon="mdi-account"></v-btn>
      </template>
      <v-card min-width="250">
        <v-list-item>
          <v-avatar v-if="init.length > 0" color="secondary" size="large">
            <span class="text-h5">{{ init }}</span>
          </v-avatar>
          <v-avatar
            v-else
            color="secondary"
            size="large"
            icon="mdi-account"
          ></v-avatar>
          <v-card-title>{{ user }}</v-card-title>
          <v-card-subtitle>{{ username }}</v-card-subtitle>
        </v-list-item>
        <v-divider></v-divider>
        <v-list>
          <v-list-item>
            <v-btn block color="primary"> Profil </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn block color="primary"> Einstellungen </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn block color="primary"> Kontakt </v-btn>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn block color="warning" text @click="menu = false">
            Logout
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-app-bar>

  <div class="mt-8 pa-4" outlined tile>
    <h1>Einstellungen</h1>
    <h2>Geben Sie hier bitte Ihren vollständigen Namen ein</h2>
    <v-text-field label="Vorname" v-model="first"> </v-text-field>
    <v-text-field label="Nachname" v-model="last"> </v-text-field>
    <h2 v-if="user.length > 1">Vielen Dank!</h2>
    <h2 v-else></h2>
    <h2>{{ CapF }}</h2>
    <h2>{{ CapL }}</h2>
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
const { capFirst: CapF } = storeToRefs(nameStore);
const { capLast: CapL } = storeToRefs(nameStore);
const { initials: init } = storeToRefs(nameStore);

const menu = ref(false);
</script>
