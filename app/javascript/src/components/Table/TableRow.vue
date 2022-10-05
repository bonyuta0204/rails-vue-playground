<template>
  <tr class="table_row">
    <td v-for="n in depth" class="table_cell empty_cell"></td>
    <td class="table_cell table_title_cell">
      <div class="table_title">
        {{ row.title }}
      </div>
      <template v-if="showOpenToggle">
        <div v-if="row.isOpen" class="toggle_icon" @click="onClickClose">
          🔻
        </div>
        <div v-else class="toggle_icon" @click="onClickOpen">></div>
      </template>
    </td>
    <td
      v-for="n in titleColumnWidth - depth - 1"
      class="table_cell empty_cell"
    ></td>
    <template v-for="cell in row.cells">
      <td class="table_cell">{{ cell.value }}</td>
    </template>
  </tr>
</template>

<script lang="ts">
import { DisplayRow } from "@/types/table";
import { computed, defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  name: "TableRow",
  props: {
    row: {
      type: Object as PropType<DisplayRow>,
      required: true,
    },
    titleColumnWidth: {
      type: Number,
      required: true,
    },
    depth: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const showOpenToggle = computed<boolean>(
      () => !!(props.row.subRows && props.row.subRows.length > 0)
    );

    function onClickOpen() {
      emit("open-row", props.row.id);
    }

    function onClickClose() {
      emit("close-row", props.row.id);
    }
    return {
      onClickOpen,
      onClickClose,
      showOpenToggle,
    };
  },
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}

.empty_cell {
  min-width: 50px;
}

.table_title_cell {
  display: flex;
}

.table_title {
  flex: 1;
}

.toggle_icon {
  cursor: pointer;
}
</style>
