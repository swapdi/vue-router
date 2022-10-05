import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useNameStore = defineStore("name", () => {
  const firstname = ref("");
  const lastname = ref("");
  const fullname = computed(() => [firstname.value, lastname.value].join(" "));

  return { fullname, firstname, lastname };
});
