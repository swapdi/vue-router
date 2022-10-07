<template>
  <v-app-bar app color="grey">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title>SHI-Institut</v-app-bar-title>

    <v-spacer></v-spacer>
    <v-btn icon>
      <v-avatar large rounded>
        <v-menu bottom :close-on-click="closeOnClick">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on">
              <span class="text-h4">CJ</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>Test</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-avatar>
    </v-btn>
  </v-app-bar>
  <v-main>
    <h1>Herzlich Willkommen</h1>
    <h2>{{ user }}</h2></v-main
  >
</template>

<script setup>
import { useNameStore } from "../stores/names";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const nameStore = useNameStore();
const { fullname: user } = storeToRefs(nameStore);
const { firstname: first } = storeToRefs(nameStore);
const { lastname: last } = storeToRefs(nameStore);

const drawer = ref(true);

const rail = ref(true);
</script>
<style scoped></style>
