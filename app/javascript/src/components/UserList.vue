<template>
  <div>
    <p>{{ userNames }}</p>
    <button @click="onClick">open modal</button>
  </div>
</template>

<script lang="ts">
import UserShowModal from "./modals/UserShowModal.vue";
import { defineComponent, onMounted } from "@vue/composition-api";
import { UsersState, UsersGetters, UsersActions } from "../store/modules/users";
import { useModalStore } from "../composables/useModalStore";
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

    const { openModal } = useModalStore();

    const { loadUsers } = useNamespacedActions<UsersActions>("users", [
      "loadUsers",
    ]);

    const onClick = () => {
      openModal(UserShowModal, {
        modalTitle: "test modal title",
        onHide: () => {
          console.log("modal hidden");
        },
        onCancel: () => {
          console.log("onCancel");
        },
        onOk: () => {
          console.log("onOk");
        },
      });
    };

    onMounted(() => {
      loadUsers();
    });

    return {
      onClick,
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
