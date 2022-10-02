<template>
  <div class="app_container">
    <div class="header_container">
      <router-link class="header_link" :to="{ name: 'chart' }"
        >Chart</router-link
      >
      <router-link class="header_link" :to="{ name: 'message' }"
        >Message</router-link
      >
      <router-link class="header_link" :to="{ name: 'heavy' }"
        >Heavy</router-link
      >
      <router-link class="header_link" :to="{ name: 'dashboard' }"
        >Dashboard</router-link
      >
    </div>
    <div class="page_container">
      <router-view></router-view>
    </div>
    <global-modal></global-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "@vue/composition-api";
import GlobalModal from "./src/components/modals/GlobalModal.vue";
import * as Sentry from "@sentry/vue";
import { provideModalStore } from "@/composables/useModalStore";
import { useOperator } from "@/composables/useOperator";

export default defineComponent({
  components: {
    GlobalModal,
  },
  setup() {
    provideModalStore();
    const message = ref("message");
    const users = ref([]);

    const { operator } = useOperator();

    watch(operator, (newOperator) => {
      if (newOperator) {
        Sentry.setUser({ id: newOperator.id, username: newOperator.name });
      } else {
        Sentry.setUser(null);
      }
    });

    return {
      message,
      users,
    };
  },
});
</script>

<style>
.header_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}

.header_link {
  font-size: 20px;
}

.app_container {
  height: 100%;
}

.page_container {
  height: calc(100% - 40px);
}

html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}

p {
  font-size: 2em;
  text-align: center;
}
</style>
