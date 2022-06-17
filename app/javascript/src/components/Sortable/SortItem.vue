<template>
  <div
    class="list-item"
    :class="{ 'is-dragover': isDragover }"
    draggable="true"
    @dragstart="$emit('dragstart', $event)"
    @dragend="$emit('dragend', $event)"
    @dragenter="onDragEnter"
    @dragover="onDragOver"
    @drop="onDrop"
  >
    {{ name }} {{mousePosition ? mousePosition : ''}}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";

export default defineComponent({
  props: {
    name: {
      type: String,
    },
    isDragover: {
      type: Boolean,
    },
    mousePosition: {
      type: [String, Boolean],
    }
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

    function onDrop(event: DragEvent){
      event.preventDefault();
      emit("drop", event);
    }

    return {
      onDragEnter,
      onDragOver,
      onDrop
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

.is-dragover {
  background-color: #fbdcdc !important;
}
</style>
