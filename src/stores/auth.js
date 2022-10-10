import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("login", () => {
  const username = ref("");
  const password = ref("");
  const check = computed(() => {
    if (username.value === "admin" && password.value === "admin") {
      return true;
    } else return false;
  });
  const returnUrl = ref("");

  return { username, password, check, returnUrl };
});
