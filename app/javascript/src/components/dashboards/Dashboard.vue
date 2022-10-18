<template>
  <div class="dashboard_layout">
    <dashboard-grid v-slot="{ gridLayout }" :widgets="dashboard.widgets">
      <grid-item
        v-for="(item, i) in gridLayout"
        :key="item.id"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="String(item.i)"
        is-draggable
        is-resizable
      >
        <widget-card :widget="dashboard.widgets[i]"> </widget-card>
      </grid-item>
    </dashboard-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { GridItem } from "vue-grid-layout";
import { Dashboard } from "@/types/dashboard";
import DashboardGrid from "./DashboardGrid.vue";
import WidgetCard from "./widgets/WidgetCard.vue";

export default defineComponent({
  name: "DashboardDetail",
  components: {
    DashboardGrid,
    GridItem,
    WidgetCard,
  },
  props: {
    dashboard: {
      type: Object as PropType<Dashboard>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
