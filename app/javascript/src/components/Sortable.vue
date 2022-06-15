<template>
  <div class="container">
    <ul id="items">
      <li class="list-item">item 1</li>
      <li class="list-item">item 2</li>
      <li class="list-item">item 3</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";
// Default SortableJS
import Sortable from "sortablejs";

export default defineComponent({
  setup() {
    onMounted(() => {
      var el = document.getElementById("items");
      var sortable = Sortable.create(el, {
        animation: 150,
      });
    });
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
