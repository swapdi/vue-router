<template>
  <draggable
    v-model="myArray"
    @start="drag = true"
    @end="drag = false"
    item-key="id"
    direction="horizontal"
  >
    <template #item="{ element }">
      <div>
        <v-card
          ><v-tabs v-model="tab" background-color="primary">
            <v-tab :value="element.name">{{ element.name }}</v-tab>
          </v-tabs>
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item :value="element.name">
                {{ element.content }}</v-window-item
              >
            </v-window>
          </v-card-text>
        </v-card>
      </div>
    </template>
  </draggable>
</template>
<script setup>
import draggable from "vuedraggable";
import { ref } from "vue";

const drag = ref(false);
const tab = ref(null);
const myArray = ref([
  { id: 1, name: "Tab 1", content: "Das ist der erste Tab" },
  { id: 2, name: "Tab 2", content: "Das ist der zweite Tab" },
  { id: 3, name: "Tab 3", content: "Das ist der dritte Tab" },
]);
</script>
<style scoped></style>
