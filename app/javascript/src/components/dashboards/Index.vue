<template>
  <div class="dashboard_layout">
    <dashboard-detail
      v-if="dashboard"
      :dashboard="dashboard"
    ></dashboard-detail>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import useSWRV from "swrv";
import Gateway from "@/lib/gateway";
import type { Dashboard } from "@/types/dashboard";
import DashboardDetail from "./Dashboard.vue";

export default defineComponent({
  name: "DashboardIndex",
  components: { DashboardDetail },
  setup() {
    const gateway = new Gateway();
    const selectedDashboardId = ref<Dashboard["id"]>(1);
    const { data: dashboard } = useSWRV<Dashboard>(
      () => `/ajax/dashboards/${selectedDashboardId.value}`,
      gateway.get
    );

    return {
      dashboard,
    };
  },
});
</script>

<style scoped></style>
