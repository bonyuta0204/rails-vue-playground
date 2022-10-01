<template>
  <div>
    <p>{{ userNames }}</p>
    <button @click="onClick">open modal</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import useSWRV from "swrv";
import UserShowModal from "./modals/UserShowModal.vue";
import { useModalStore } from "@/composables/useModalStore";
import Gateway from "@/lib/gateway/index";

export default defineComponent({
  setup() {
    interface User {
      id: string;
      name: string;
      avatar_url: string;
      created_at: string;
      updated_at: string;
    }

    const gateway = new Gateway();

    const { openModal } = useModalStore();

    const onClick = () => {
      openModal(UserShowModal, {
        modalTitle: "test modal title",
        onHide: () => {
          // eslint-disable-next-line no-console
          console.log("modal hidden");
        },
        onCancel: () => {
          // eslint-disable-next-line no-console
          console.log("onCancel");
        },
        onOk: () => {
          // eslint-disable-next-line no-console
          console.log("onOk");
        },
      });
    };

    const { data: users } = useSWRV<User[]>("/ajax/users", gateway.get);

    const userNames = computed<User["name"][]>(() => {
      if (!users.value) return [];
      return users.value.map((user) => user.name);
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
