<template>
  <v-container fluid>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
      location="right"
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        :title="user"
        nav
      >
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home-city"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="My Account"
          value="account"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-group-outline"
          title="Users"
          value="users"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <h1>Herzlich Willkommen</h1>
      <h2>{{ user }}</h2></v-main
    >
  </v-container>
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
