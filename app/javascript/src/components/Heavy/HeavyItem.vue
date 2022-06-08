<template>
  <p>Heavy Item</p>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";

export default defineComponent({
  setup() {
    onMounted(() => {
      for(let i = 0;i<10000000;i++){
        i * i * i
      }
    });

    return {
    };
  },
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
