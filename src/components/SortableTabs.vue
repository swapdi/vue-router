<template>
  <v-card
    ><v-tabs v-model="tab">
      <draggable
        v-model="sortedList2"
        @start="drag = true"
        @end="drag = false"
        tag="v-card-text"
        @change="onChange()"
        item-key="id"
      >
        >
        <template #item="{ element }">
          <v-tab :value="element.ID">
            {{ element.name }}
            <v-btn size="x-small" variant="plain" icon="mdi-trash-can-outline"
              ><v-dialog v-model="dialog" persistent activator="parent">
                <v-card>
                  <v-card-text>
                    Sind Sie sicher, dass Sie den ausgewählten Tab
                    unwiderruflich löschen möchten?
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="error"
                      width="50%"
                      elevation="15"
                      rounded
                      @click="remove(element.ID)"
                      >Löschen</v-btn
                    >
                    <v-btn
                      color="primary"
                      width="50%"
                      elevation="15"
                      rounded
                      @click="dialog = false"
                      >Abbrechen</v-btn
                    >
                  </v-card-actions>
                </v-card></v-dialog
              ></v-btn
            ></v-tab
          >
        </template>
      </draggable>
      <v-tab @click="add()" value="0"
        ><span style="font-size: 30px">+</span></v-tab
      >
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab" v-for="item in sortedList2" :key="item.ID">
        <v-window-item :value="item.ID">{{ item.name }}</v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  <h1>{{ tablist }}</h1>
  <h1>{{ tablist.length }}</h1>
  <h1>{{ sortedList2 }}</h1>
</template>

<script setup>
import draggable from "vuedraggable";
import { ref, computed, defineComponent, watch } from "vue";

const drag = ref(false);
const tab = ref(null);
const dialog = ref(false);

defineComponent({
  components: {
    draggable,
  },
});

const tablist = ref([
  { ID: 1, name: "Tab 1", order: 1 },
  { ID: 2, name: "Tab 2", order: 2 },
  { ID: 3, name: "Tab 3", order: 3 },
]);
/* const sortedList = computed(() => {
  return sort(tablist.value.slice());
});
 */
const sortedList2 = ref(
  tablist.value.filter((item) => item).sort((a, b) => a.order - b.order)
);

watch(
  tablist,
  () => {
    sortedList2.value = tablist.value
      .filter((item) => item)
      .sort((a, b) => a.order - b.order);
  },
  { deep: true }
);

/* function sort(list) {
  return list.sort(compare);
} */

/* function compare(a, b) {
  if (a.order < b.order) {
    return -1;
  }
  if (a.order > b.order) {
    return 1;
  }
  return 0;
} */
const last = computed(() => {
  return sortedList2.value[tablist.value.length - 1];
});
const lastOrder = computed(() => {
  return last.value.order;
});

const lastID = ref(3);
function add() {
  lastID.value++;
  return tablist.value.push({
    ID: lastID.value,
    name: "Neuer Tab " + lastID.value,
    order: lastOrder.value + 1,
  });
}
function remove(id) {
  dialog.value = false;
  const index = tablist.value.findIndex((object) => {
    return object.ID === id;
  });
  if (index > -1) {
    tablist.value.splice(index, 1);
  }
}
function onChange() {
  for (let i = 0; i < sortedList2.value.length; i++) {
    const sortedListElement = sortedList2.value[i];
    const tablistElement = tablist.value.find(
      (listItem) => (listItem && listItem.ID) === sortedListElement.ID
    );
    const newOrder = i + sortedList2.value.length;
    if (tablistElement && tablistElement.order !== newOrder)
      tablistElement.order = newOrder;
  }
}
</script>
<style scoped>
.tabbtn {
  margin: 0.2mm;
  padding: 1mm;
  width: 1px;
}
</style>
