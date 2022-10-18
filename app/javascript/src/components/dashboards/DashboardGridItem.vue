<template>
  <grid-item
    :key="layoutItem.i"
    :x="layoutItem.x"
    :y="layoutItem.y"
    :w="layoutItem.w"
    :h="layoutItem.h"
    :i="layoutItem.i"
    is-draggable
    is-resizable
  >
    <slot></slot>
  </grid-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { LayoutItem } from "@/types/dashboard";
import { GridItem } from "vue-grid-layout";

/**
 * component responsible dashboard DnD, resize function
 */
export default defineComponent({
  name: "DashboardGridItem",
  components: {
    GridItem,
  },
  props: {
    layoutItem: {
      type: Object as PropType<LayoutItem>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
