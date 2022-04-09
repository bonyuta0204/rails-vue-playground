<template>
  <p>{{ userNames }}</p>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import { UsersState, UsersGetters, UsersActions } from "../store/modules/users";
import {
  useNamespacedState,
  useNamespacedGetters,
  useNamespacedActions,
} from "vuex-composition-helpers";

export default defineComponent({
  setup() {
    const { users } = useNamespacedState<UsersState>("users", ["users"]);
    const { userNames } = useNamespacedGetters<UsersGetters>("users", [
      "userNames",
    ]);

    const { loadUsers } = useNamespacedActions<UsersActions>("users", [
      "loadUsers",
    ]);

    onMounted(() => {
      loadUsers();
    });

    return {
      users,
      userNames,
    };
  },
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
