<template>
  <div class="dashboard_layout">
    <grid-layout
      v-if="gridLayout"
      :layout.sync="gridLayout"
      @layout-updated="onLayoutUpdated"
      is-draggable
      is-resizable
    >
      <grid-item
        v-for="(item, i) in gridLayout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="1"
        :i="String(item.i)"
        :key="item.id"
        is-draggable
        is-resizable
      >
        <widget-card :widget="dashboard.widgets[i]"> </widget-card>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  ref,
} from "@vue/composition-api";
import { Dashboard, Layout } from "@/types/dashboard";
import { GridLayout, GridItem } from "vue-grid-layout";
import WidgetCard from "./widgets/WidgetCard.vue";
import { applyDashboardLayout } from "../../lib/helpers/dasboard/dashboard_helper";

/**
 * component responsible dashboard DnD, resize function
 */
export default defineComponent({
  name: "DashboardGrid",
  props: {
    dashboard: {
      type: Object as PropType<Dashboard>,
      required: true,
    },
  },
  components: {
    GridLayout,
    GridItem,
    WidgetCard,
  },
  setup(props, { emit }) {
    const gridLayout = ref<Layout>();

    onMounted(() => {
      gridLayout.value = props.dashboard.widgets.map((widget) => ({
        x: widget.x,
        y: widget.y,
        h: widget.h,
        w: widget.w,
        i: String(widget.id),
      }));
    });

    function onLayoutUpdated() {
      if (gridLayout.value) {
        const updatedDashboard: Dashboard = applyDashboardLayout(
          props.dashboard,
          gridLayout.value
        );

        emit("update-dashboard", updatedDashboard);
      }
    }
    return {
      gridLayout,
      onLayoutUpdated,
    };
  },
});
</script>

<style scoped></style>
