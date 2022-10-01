<template>
  <div class="dashboard_layout">
    <dashboard-grid :dashboard="dashboard"></dashboard-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Dashboard } from "@/dashboard";
import DashboardGrid from "./DashboardGrid.vue";

export default defineComponent({
  name: "DashboardDetail",
  components: {
    DashboardGrid,
  },
  props: {
    dashboard: {
      type: Object as PropType<Dashboard>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
