<template>
  <h1>Herzlich Willkommen</h1>
  <h2>{{ user }}</h2>
</template>

<script setup>
import { useNameStore } from "../stores/names";
import { storeToRefs } from "pinia";
const userName = useNameStore();
const { name: user } = storeToRefs(userName);
</script>
