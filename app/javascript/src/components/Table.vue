<template>
  <table class="table_root">
    <template v-for="header in headers">
      <table-header
        :header="header"
        :title-column-width="titleColumnWidth"
      ></table-header>
    </template>
    <template v-for="row in displayRows">
      <table-row-wrap
        :row="row"
        :title-column-width="titleColumnWidth"
        :collapsed="false"
        @open-row="onOpenRow"
        @close-row="onCloseRow"
      ></table-row-wrap>
    </template>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "@vue/composition-api";
import TableHeader from "./Table/TableHeader.vue";
import TableRowWrap from "./Table/TableRowWrap";
import type { DisplayRow, Header, Row, RowOpenState } from "@/types/table";
import { mergeRowOpenState } from "@/lib/table";

const titleColumnWidth = 3;

const headers: Header[] = [
  [
    {
      label: "2022年第一四半期",
      width: 2,
    },
    {
      label: "2022年第二四半期",
      width: 2,
    },
    {
      label: "2022年第三四半期",
      width: 2,
    },
    {
      label: "2022年第四四半期",
      width: 2,
    },
  ],
  [
    {
      label: "予算",
      width: 1,
    },
    {
      label: "実績",
      width: 1,
    },
    {
      label: "予算",
      width: 1,
    },
    {
      label: "実績",
      width: 1,
    },
    {
      label: "予算",
      width: 1,
    },
    {
      label: "実績",
      width: 1,
    },
    {
      label: "予算",
      width: 1,
    },
    {
      label: "実績",
      width: 1,
    },
  ],
];

const rows: Row[] = [
  {
    id: 1,
    title: "売上(全体)",
    cells: [
      {
        value: 100,
      },
      {
        value: 200,
      },
      {
        value: 300,
      },
      {
        value: 400,
      },
      {
        value: 500,
      },
      {
        value: 600,
      },
    ],
    subRows: [
      {
        id: 2,
        title: "売上(開発)",
        cells: [
          {
            value: 100,
          },
          {
            value: 200,
          },
          {
            value: 300,
          },
          {
            value: 400,
          },
          {
            value: 500,
          },
          {
            value: 600,
          },
        ],
        subRows: [
          {
            id: 7,
            title: "売上(b→dash開発)",
            cells: [
              {
                value: 100,
              },
              {
                value: 200,
              },
              {
                value: 300,
              },
              {
                value: 400,
              },
              {
                value: 500,
              },
              {
                value: 600,
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: "売上(営業)",
        cells: [
          {
            value: 100,
          },
          {
            value: 200,
          },
          {
            value: 300,
          },
          {
            value: 400,
          },
          {
            value: 500,
          },
          {
            value: 600,
          },
        ],
      },
    ],
  },
];

export default defineComponent({
  name: "TableDetail",
  components: {
    TableHeader,
    TableRowWrap,
  },
  setup() {
    const rowOpenState = ref<RowOpenState>({
      1: true,
      2: true,
      3: true,
    });

    const displayRows = computed<DisplayRow[]>(() =>
      mergeRowOpenState(rows, rowOpenState.value)
    );

    function onOpenRow(rowId: Row["id"]) {
      rowOpenState.value[rowId] = true;
    }

    function onCloseRow(rowId: Row["id"]) {
      rowOpenState.value[rowId] = false;
    }

    return {
      onOpenRow,
      onCloseRow,
      displayRows,
      headers,
      titleColumnWidth,
    };
  },
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}

.table_root {
  display: table;
}
</style>
