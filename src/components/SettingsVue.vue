<template>
  <hr />
  <div class="page">
    <p>
      <label class="label" for="first">Vorname: </label>
      <input
        class="input"
        v-model="firstname"
        id="first"
        @change="getFullName()"
        :placeholder="firstname"
      />
    </p>
    <p>
      <label class="label" for="lastname">Name: </label>
      <input
        class="input"
        v-model="lastname"
        id="lastname"
        @change="getFullName()"
        :placeholder="lastname"
      />
    </p>
    <h2>
      {{ fullname }}
    </h2>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNameStore } from "../stores/names";
import { storeToRefs } from "pinia";
const nameStore = useNameStore();
const { name: fullname } = storeToRefs(nameStore);
const firstname = ref("");
const lastname = ref("");
function getFullName() {
  fullname.value = [firstname.value, lastname.value].join(" ");
}
</script>

<style scoped>
.input {
  position: absolute;
  right: 0px;
}
.page {
  position: relative;
  top: 5%;
}
h2 {
  text-align: center;
}
</style>
