<template>
  <div class="dashboard_layout">
    <dashboard-grid v-slot="{ gridLayout }" :widgets="dashboard.widgets">
      <template v-for="(item, i) in gridLayout">
        <dashboard-grid-item :layout-item="item">
          <widget-data
            v-slot="{ widgetData }"
            :widget-id="dashboard.widgets[i].id"
          >
            <widget-card v-if="widgetData" :widget="widgetData">
              <component
                :is="widgetBodyComponent(widgetData.type)"
                :widget="widgetData"
              >
              </component>
            </widget-card>
          </widget-data>
        </dashboard-grid-item>
      </template>
    </dashboard-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Dashboard, Widget } from "@/types/dashboard";
import DashboardGrid from "./DashboardGrid.vue";
import DashboardGridItem from "./DashboardGridItem.vue";
import WidgetCard from "./widgets/WidgetCard.vue";
import WidgetData from "./widgets/WidgetData.vue";
import GraphWidgetBody from "./widgets/GraphWidgetBody.vue";

export default defineComponent({
  name: "DashboardDetail",
  components: {
    DashboardGrid,
    DashboardGridItem,
    WidgetCard,
    WidgetData,
    GraphWidgetBody,
  },
  props: {
    dashboard: {
      type: Object as PropType<Dashboard>,
      required: true,
    },
  },
  setup() {
    function widgetBodyComponent(widgetType: Widget["type"]) {
      switch (widgetType) {
        case "GraphWidget":
          return "GraphWidgetBody";
      }
    }
    return { widgetBodyComponent };
  },
});
</script>

<style scoped></style>
