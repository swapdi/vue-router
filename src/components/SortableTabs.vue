<template>
  <v-card
    ><v-tabs v-model="tab">
      <draggable
        v-model="tablist"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
        tag="v-card-text"
      >
        <template #item="{ element }">
          <v-tab :value="element">{{ element }}</v-tab>
        </template> </draggable
      ><v-tab @click="add"><span style="font-size: 30px">+</span></v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="Tab 1"> Tab 1</v-window-item>
        <v-window-item value="Tab 2"> Tab 2</v-window-item>
        <v-window-item value="Tab 3"> Tab 3</v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<script setup>
import draggable from "vuedraggable";
import { ref } from "vue";

const a = ref(0);
function add() {
  a.value++;
  return tablist.value.push("Neuer Tab" + a.value);
}
const drag = ref(false);
const tab = ref(null);
const tablist = ref(["Tab 1", "Tab 2", "Tab 3"]);
</script>
<style scoped></style>
