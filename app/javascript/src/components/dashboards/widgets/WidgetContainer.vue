<template>
  <div class="dashboard_layout">
    <grid-item
      :x="widget.x"
      :y="widget.y"
      :w="widget.w"
      :h="widget.h"
      :i="widget.id"
      :key="widget.id"
    >
      <widget-card :widget="widget"> </widget-card>
    </grid-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Widget } from "src/types/dashboard";
import { GridItem } from "vue-grid-layout";
import WidgetCard from "./WidgetCard.vue";

/**
 * component responsible dashboard DnD, resize function
 */
export default defineComponent({
  name: "WidgetContainer",
  props: {
    widget: {
      type: Object as PropType<Widget>,
      required: true,
    },
  },
  components: {
    GridItem,
    WidgetCard,
  },
  setup(props) {},
});
</script>

<style scoped></style>
