<template>
  <hr />
  <div class="page">
    <p>
      <label class="label" for="usr">Benutzername: </label>
      <input class="input" v-model="username" id="usr" />
    </p>
    <p>
      <label class="label" for="pass">Passwort: </label>
      <input class="input" v-model="password" id="pass" />
    </p>
    <p>
      <button class="center">LOGIN</button>
      <button class="center">Anmeldem mit Keycloak</button>
    </p>
  </div>
</template>
<script setup></script>
<style scoped>
.input {
  position: absolute;
  right: 0px;
}
.page {
  position: relative;
  top: 5%;
}
.center {
  margin: 1px;
  padding: 5px;
  position: relative;
  left: 40%;
}
</style>
