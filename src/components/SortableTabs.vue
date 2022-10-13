<template>
  <draggable
    v-model="myArray"
    @start="drag = true"
    @end="drag = false"
    item-key="id"
  >
    <template #item="{ element }">
      <div>{{ element.name }}</div>
    </template>
  </draggable>
</template>
<script setup>
import draggable from "vuedraggable";
import { ref } from "vue";

const drag = ref(false);
const myArray = ref([
  { id: 1, name: "Tab 1" },
  { id: 2, name: "Tab 2" },
  { id: 3, name: "Tab 3" },
]);
</script>
