<template>
  <tr class="table_row">
    <th v-for="n in titleColumnWidth" class="table_header"></th>
    <template v-for="item in header">
      <th class="table_header" :colspan="item.width">
        {{ item.label }}
      </th>
    </template>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "TableHeader",
  props: {
    header: {
      type: Array,
      required: true,
    },
    titleColumnWidth: {
      type: Number,
      required: true,
    },
  },
  setup() {},
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
