<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-app>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/settings">Settings</RouterLink> |
        <RouterLink to="/login">Log-In</RouterLink>
      </nav>
    </div>
    <RouterView />
  </v-app>
</template>

<style scoped>
.wrapper {
  font-size: xx-large;
}
</style>
