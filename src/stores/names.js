import { ref } from "vue";
import { defineStore } from "pinia";

export const useNameStore = defineStore("name", () => {
  const name = ref("");
  return { name };
});
