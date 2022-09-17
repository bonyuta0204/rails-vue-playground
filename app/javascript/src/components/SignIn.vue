<template>
  <div class="container">
    <div class="chart_wrapper">
      <div id="container"></div>
    </div>
    <div class="editor_wrapper">
      <div class="tool_bar">
        <button @click="onClickApply">適用</button>
      </div>
      <div id="monaco" class="editor_body"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import { googleSignIn } from "src/lib/auth/index";

export default defineComponent({
  setup() {
    onMounted(() => {
      googleSignIn();
    });
  },
});
</script>

<style scoped></style>
