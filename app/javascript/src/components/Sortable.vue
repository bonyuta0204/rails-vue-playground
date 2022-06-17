<template>
  <div class="container">
    <ul id="items" v-for="item in items" :key="item.id">
      <sort-item
        :name="item.label"
        :is-dragover="isDragover(item)"
        :mouse-position="isDragover(item) && dragTargetPosition"
        @dragstart="onDragStart($event, item)"
        @dragend="onDragEnd($event, item)"
        @dragenter="onDragEnter($event, item)"
        @dragover="onDragOver($event, item)"
        @drop="onDrop($event, item)"
      ></sort-item>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from "@vue/composition-api";
// Default SortableJS
import SortItem from "./Sortable/SortItem.vue";

type Item = { id: number; label: string };

export default defineComponent({
  components: { SortItem },
  setup() {
    const items: Item[] = [
      { id: 1, label: "Item1" },
      { id: 2, label: "Item2" },
      { id: 3, label: "Item3" },
    ];

    /** D&Dで掴んでいる要素 */
    const draggingItem: Ref<Item | undefined> = ref();

    /** D&Dでホバー中の要素 */
    const dragTargetItem: Ref<Item | undefined> = ref();

    /** D&Dでホバー中の要素についてマウスポインタが上半分にあるか、下半分にあるか*/
    const dragTargetPosition: Ref<"up" | "down" | undefined> = ref();

    function onDragStart(_: DragEvent, item: Item) {
      draggingItem.value = item;
    }

    function onDragEnd(_: DragEvent) {
      draggingItem.value = undefined;
      dragTargetItem.value = undefined;
      dragTargetPosition.value = undefined;
    }

    function onDragEnter(_: DragEvent, item: Item) {
      dragTargetItem.value = item;
    }

    function onDragOver(evt: DragEvent) {
      const mouseY = evt.clientY;

      const target = evt.target as HTMLElement;
      const targetRect = target.getClientRects()[0];

      if (mouseY < targetRect.y + targetRect.height / 2) {
        dragTargetPosition.value = "up";
      } else {
        dragTargetPosition.value = "down";
      }
    }

    function isDragover(item: Item) {
      return dragTargetItem.value && dragTargetItem.value.id === item.id;
    }

    function onDrop(_: DragEvent) {
      handleDrop(
        draggingItem.value,
        dragTargetItem.value,
        dragTargetPosition.value
      );
    }

    function handleDrop(
      srcItem: Item,
      targetItem: Item,
      targetPosition: "up" | "down"
    ) {
      console.log(`move from ${srcItem.label} to ${targetItem.label}. position: ${targetPosition}`);
    }

    return {
      items,
      isDragover,
      onDragEnd,
      onDragEnter,
      onDragOver,
      onDragStart,
      onDrop,
      draggingItem,
      dragTargetItem,
      dragTargetPosition,
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
