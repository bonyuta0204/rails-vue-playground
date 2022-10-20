<template>
  <div class="graph_widget_body">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/composition-api";
import { GraphWidget } from "@/types/dashboard";

/**
 * WidgetData Vue
 */
export default defineComponent({
  name: "GraphWidgetBody",
  props: {
    widget: {
      type: Object as PropType<GraphWidget>,
      required: true,
    },
  },
  setup(props) {
    const chartOptions = computed(() => {
      return {
        xAxis: props.widget.graph_data.x_axis,
        series: props.widget.graph_data.series,
      };
    });
    return { chartOptions };
  },
});
</script>

<style scoped></style>
