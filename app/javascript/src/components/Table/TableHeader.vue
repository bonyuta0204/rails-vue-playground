<template>
  <tr class="table_row">
    <th class="table_header"></th>
    <template v-for="item in header">
      <th class="table_header" :colspan="item.width">
        {{ item.label }}
      </th>
    </template>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  name: "TableHeader",
  props: {
    header: {
      type: Array as PropType<{ width: number; label: string }[]>,
      required: true,
    },
    titleColumnWidth: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}

.table_row {
  display: table-row;
}

.table_header {
  display: table-cell;
}
</style>
