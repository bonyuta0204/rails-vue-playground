<template>
  <div class="widget_card_wrap">
    <div class="widget_text">
      {{ widget.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Widget } from "src/types/dashboard";

/**
 * WidgetCard Vue
 */
export default defineComponent({
  name: "WidgetCard",
  props: {
    widget: {
      type: Object as PropType<Widget>,
      required: true,
    },
  },
  components: {},
  setup() {},
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
