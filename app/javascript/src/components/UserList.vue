<template>
  <p>{{ userNames }}</p>
</template>

<script lang="ts">
import useSWRV from "swrv";
import Gateway from "../lib/gateway";

import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    type User = {
      id: string;
      name: string;
      avatar_url: string;
      created_at: string;
      updated_at: string;
    };

    const gateway = new Gateway();

    const { data: users } = useSWRV<User[]>("/ajax/users", gateway.get);

    const userNames = computed<User["name"][]>(() => {
      if (!users.value) return [];
      return users.value.map((user) => user.name);
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
