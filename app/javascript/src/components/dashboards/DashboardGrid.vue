<template>
  <div class="dashboard_layout">
    <grid-layout
      v-if="gridLayout"
      :layout.sync="gridLayout"
      is-draggable
      is-resizable
      @layout-updated="onLayoutUpdated"
    >
      <slot :grid-layout="gridLayout"></slot>
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
import { Layout, WidgetLayout } from "@/types/dashboard";
import { GridLayout } from "vue-grid-layout";
import { applyDashboardLayout } from "../../lib/helpers/dasboard/dashboard_helper";

/**
 * component responsible dashboard DnD, resize function
 */
export default defineComponent({
  name: "DashboardGrid",
  components: {
    GridLayout,
  },
  props: {
    widgets: {
      type: Array as PropType<WidgetLayout[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const gridLayout = ref<Layout>();

    onMounted(() => {
      gridLayout.value = props.widgets.map((widget) => ({
        x: widget.x,
        y: widget.y,
        h: widget.h,
        w: widget.w,
        i: String(widget.id),
      }));
    });

    function onLayoutUpdated() {
      if (gridLayout.value) {
        const updatedDashboard = applyDashboardLayout(
          props.widgets,
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
