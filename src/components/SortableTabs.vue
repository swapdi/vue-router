<template>
  <v-card
    ><v-tabs v-model="tab">
      <draggable
        v-model="tablist"
        @start="drag = true"
        @end="drag = false"
        item-key="tab"
        tag="v-card-text"
      >
        <template #item="{ element }">
          <v-tab :value="element"
            >{{ element.name }}<v-btn @click="remove()">X</v-btn></v-tab
          >
        </template>
      </draggable>
      <v-tab @click="add"><span style="font-size: 30px">+</span></v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab" v-for="tabs in tablist" :key="tabs.name">
        <v-window-item :value="tabs.name">{{ tabs.order }}</v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  <h1>{{ tablist }}</h1>
</template>
<script setup>
import draggable from "vuedraggable";
import { ref } from "vue";

const a = ref(0);
function add() {
  a.value++;
  return tablist.value.push({ name: "Neuer Tab" + a.value, order: a.value });
}
const drag = ref(false);
const tab = ref(null);

const tablist = ref([
  { name: "Tab 1", order: 1 },
  { name: "Tab 2", order: 2 },
  { name: "Tab 3", order: 3 },
]);
function remove() {
  const index = tablist.value.indexOf(element);
}
</script>
<style scoped></style>
