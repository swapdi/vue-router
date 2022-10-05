<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-app>
    <v-main>
      <RouterView />
    </v-main>
    <v-bottom-navigation app fixed>
      <router-link to="/" v-slot="{ href, route, navigate }">
        <v-btn plain :href="href" @click="navigate">
          {{ route.name }}
        </v-btn>
      </router-link>

      <router-link to="/settings" v-slot="{ href, route, navigate }">
        <v-btn plain :href="href" @click="navigate">
          {{ route.name }}
        </v-btn>
      </router-link>
      <router-link to="/login" v-slot="{ href, route, navigate }">
        <v-btn plain :href="href" @click="navigate">
          {{ route.name }}
        </v-btn>
      </router-link>
    </v-bottom-navigation>
  </v-app>
</template>
