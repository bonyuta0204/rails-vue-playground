<template>
  <div class="widget_data">
    <slot :widget-data="widgetData"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import useSWRV from "swrv";
import Gateway from "@/lib/gateway/index";
import { Widget } from "@/types/dashboard";

/**
 * WidgetData Vue
 */
export default defineComponent({
  name: "WidgetData",
  props: {
    widgetId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const gateway = new Gateway();
    const { data: widgetData } = useSWRV<Widget>(
      () => `/ajax/widgets/${props.widgetId}`,
      gateway.get
    );

    return { widgetData };
  },
});
</script>

<style scoped>
.widget_data {
  display: contents;
}
</style>
