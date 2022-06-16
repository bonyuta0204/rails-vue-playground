<template>
  <div
    class="list-item"
    draggable="true"
    @dragstart="$emit('dragstart', $event)"
    @dragenter="onDragEnter"
    @dragover="onDragOver"
  >
    {{ name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";

export default defineComponent({
  props: {
    name: {
      type: String,
    },
  },
  setup(_, { emit }) {
    function onDragEnter(event: DragEvent) {
      event.preventDefault();
      emit("dragenter", event);
    }

    function onDragOver(event: DragEvent) {
      event.preventDefault();
      emit("dragover", event);
    }

    return {
      onDragEnter,
      onDragOver,
    };
  },
});
</script>

<style scoped>
.list-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
