import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useNameStore = defineStore("name", () => {
  const firstname = ref("");
  const lastname = ref("");

  const capFirst = computed(() => {
    if (firstname.value === "") {
      return "";
    } else {
      return firstname.value[0].toUpperCase() + firstname.value.substring(1);
    }
  });
  const capLast = computed(() => {
    if (lastname.value === "") {
      return "";
    } else {
      return lastname.value[0].toUpperCase() + lastname.value.substring(1);
    }
  });
  const initials = computed(() => {
    if (firstname.value === "" || lastname.value === "") {
      return "";
    } else {
      return capFirst.value[0] + capLast.value[0];
    }
  });
  const fullname = computed(() => [capFirst.value, capLast.value].join(" "));
  return { fullname, firstname, lastname, capFirst, capLast, initials };
});
