<template>
  <div class="defer">
    <slot :defer="defer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useDefer } from "../composables/useDefer";

export default defineComponent({
  setup() {
    const { defer } = useDefer();
    return { defer };
  },
});
</script>
