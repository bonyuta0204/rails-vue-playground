<template>
  <div>
    <p>{{ userNames }}</p>
    <button @click="onClick">open modal</button>
    <user-show-modal>open modal</user-show-modal>
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
  components: {
    UserShowModal,
  },
  setup(_, { root: { $bvModal } }) {
    const { users } = useNamespacedState<UsersState>("users", ["users"]);
    const { userNames } = useNamespacedGetters<UsersGetters>("users", [
      "userNames",
    ]);

    const { openModal } = useModalStore();

    const { loadUsers } = useNamespacedActions<UsersActions>("users", [
      "loadUsers",
    ]);

    const onClick = () => {
      console.log("onClick");
      openModal(UserShowModal, { modalTitle: "hoge" });
      //$bvModal.show('user-show-modal')
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
