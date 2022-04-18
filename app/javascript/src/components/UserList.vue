<template>
  <div>
    <p>{{ userNames }}</p>
    <button @click="onClickNotification">通知する</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import { UsersState, UsersGetters, UsersActions } from "../store/modules/users";

import { buildNotifier } from "../lib/notifier";
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

    function onClickNotification() {
      const notifyEletron = buildNotifier("electron");
      notifyEletron({
        title: "通知だよ",
        subtitle: "補足だよ",
        body: "ここが本文だよ",
      });

      const notifyBrowser = buildNotifier("browser");

      notifyBrowser({
        title: "通知だよ",
        subtitle: "補足だよ",
        body: "ここが本文だよ",
      });
    }

    onMounted(() => {
      loadUsers();
    });

    return {
      users,
      userNames,
      onClickNotification,
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
