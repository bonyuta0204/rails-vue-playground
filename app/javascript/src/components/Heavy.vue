<template>
  <div class="page">
    <div class="item_wrapper" v-for="n in 300" :key="n">
      <heavy-item v-if="defer(n / 10)"></heavy-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";
import HeavyItem from "./Heavy/HeavyItem.vue";
import { useDefer } from "../composables/useDefer";

export default defineComponent({
  components: {
    HeavyItem,
  },
  setup() {
    const { defer } = useDefer();
    return { defer };
  },
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
