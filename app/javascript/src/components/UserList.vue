<template>
  <p>{{ userNames }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import {
  UsersState,
  UsersGetters,
  UsersMutations,
} from "../store/modules/users";
import {
  useNamespacedState,
  useNamespacedGetters,
  useNamespacedMutations,
} from "vuex-composition-helpers";

export default defineComponent({
  setup() {
    const { users } = useNamespacedState<UsersState>("users", ["users"]);
    const { userNames } = useNamespacedGetters<UsersGetters>("users", [
      "userNames",
    ]);

    const { setUsers } = useNamespacedMutations<UsersMutations>("users", [
      "setUsers",
    ]);
    return {
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
