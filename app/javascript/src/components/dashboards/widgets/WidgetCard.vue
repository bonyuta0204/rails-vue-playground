<template>
  <div class="widget_card_wrap">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Widget } from "@/types/dashboard";

/**
 * WidgetCard Vue
 */
export default defineComponent({
  name: "WidgetCard",
  components: {},
  props: {
    widget: {
      type: Object as PropType<Widget>,
      required: true,
    },
  },
});
</script>

<style scoped>
.widget_card_wrap {
  height: 100%;
  width: 100%;
  border: 2px solid #909090;
  border-radius: 16px;
  padding: 4px 6px;
  z-index: 1;
}
</style>
