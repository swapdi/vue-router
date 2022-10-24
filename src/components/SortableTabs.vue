<template>
  <v-card
    ><v-tabs v-model="tab">
      <draggable
        v-model="sortedList"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
        tag="v-card-text"
      >
        >
        <template #item="{ element }">
          <v-tab :value="element.ID">
            {{ element.name
            }}<v-btn @click="remove(element.ID)">X</v-btn></v-tab
          >
        </template>
      </draggable>
      <v-tab @click="add()" value="0"
        ><span style="font-size: 30px">+</span></v-tab
      >
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab" v-for="item in tablist" :key="item.ID">
        <v-window-item :value="item.ID">{{ item.name }}</v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  <h1>{{ tablist }}</h1>
  <h1>{{ tablist.length }}</h1>
  <h1>{{ sortedList }}</h1>
</template>

<script setup>
import draggable from "vuedraggable";
import { ref, computed } from "vue";
const drag = ref(false);
const tab = ref(null);

const tablist = ref([
  { ID: 1, name: "Tab 1", order: 0 },
  { ID: 2, name: "Tab 2", order: 1 },
  { ID: 3, name: "Tab 3", order: 2 },
]);
const sortedList = computed(() => {
  return sort(tablist.value.slice());
});

/* const sortedList2 = computed(
  get() {
    return sort(tablist.value.slice());
  },
  set(newList) {

  }
); */

function sort(list) {
  return list.sort(compare);
}

function compare(a, b) {
  if (a.order < b.order) {
    return -1;
  }
  if (a.order > b.order) {
    return 1;
  }
  return 0;
}
const last = computed(() => {
  return tablist.value[tablist.value.length - 1];
});
const lastID = ref(3);

/* const index = computed(() => {
  return tablist.value.findIndex((object) => {
    return object.order === last.value.order;
  });
}); */
const lastOrder = computed(() => {
  return last.value.order;
});

function add() {
  lastID.value++;
  return tablist.value.push({
    ID: lastID.value,
    name: "Neuer Tab ",
    order: lastOrder.value + 1,
  });
}
function remove(id) {
  const index = tablist.value.findIndex((object) => {
    return object.ID === id;
  });
  if (index > -1) {
    tablist.value.splice(index, 1);
  }
}
function updateList(event, moved) {
  console.log(event);
  console.log(moved);
}
</script>
<style scoped></style>
