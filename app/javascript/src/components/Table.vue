<template>
  <table class="table_root">
    <template v-for="header in headers">
      <table-header
        :header="header"
        :title-column-width="titleColumnWidth"
      ></table-header>
    </template>
    <template v-for="section in displaySections">
      <tr class="section_row">
        <td>
          <div class="section_header">
            {{ section.title }}
          </div>
        </td>
      </tr>
      <template v-for="row in section.subRows">
        <table-row-wrap
          :row="row"
          :title-column-width="titleColumnWidth"
          :collapsed="false"
          @open-row="onOpenRow"
          @close-row="onCloseRow"
        ></table-row-wrap>
      </template>
      <template v-for="subSection in section.subSections">
        <tr class="sub_section_row">
          <td>
            <div class="sub_section_header">
              {{ subSection.title }}
            </div>
          </td>
        </tr>
        <template v-for="row in subSection.subRows">
          <table-row-wrap
            :row="row"
            :title-column-width="titleColumnWidth"
            :collapsed="false"
            @open-row="onOpenRow"
            @close-row="onCloseRow"
          ></table-row-wrap>
        </template>
      </template>
    </template>
  </table>
</template>

<script lang="ts">
import Vue from "vue";
import { computed, defineComponent, ref } from "@vue/composition-api";
import TableHeader from "./Table/TableHeader.vue";
import TableRowWrap from "./Table/TableRowWrap";
import type {
  DisplayTableSection,
  SectionOpenState,
  Header,
  Row,
  RowOpenState,
  TableSection,
} from "@/types/table";
import { mergeOpenState } from "@/lib/table";

const titleColumnWidth = 5;

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

const sections: TableSection[] = [
  {
    id: 1,
    title: "全社KGI",
    subSections: [
      {
        id: 2,
        title: "売上高",
        subRows: [
          {
            id: 100,
            title: "全社KGI",
            cells: [{ value: 100 }],
            subRows: [
              {
                id: 1,
                title: "売上高(四半期)",
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
                    title: "ARR",
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
                        title: "前Q対比成長率",
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
                    title: "MRR",
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
                        title: "前Q対比成長率",
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
                ],
              },
            ],
          },
        ],
      },
    ],
    subRows: [
      {
        id: 999,
        title: "時価総額",
        cells: [{ value: 100 }, { value: 200 }],
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

    const sectionOpenState = ref<SectionOpenState>({
      1: true,
    });

    const displaySections = computed<DisplayTableSection[]>(() =>
      mergeOpenState(sections, sectionOpenState.value, rowOpenState.value)
    );

    function onOpenRow(rowId: Row["id"]) {
      Vue.set(rowOpenState.value, rowId, true);
    }

    function onCloseRow(rowId: Row["id"]) {
      Vue.set(rowOpenState.value, rowId, false);
    }

    return {
      displaySections,
      onOpenRow,
      onCloseRow,
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

.section_row {
  background-color: #d4e3f4;
}

.section_header {
  padding-left: 10px;
}

.sub_section_header {
  margin-left: 20px;
  padding-left: 10px;
  width: 50%;
  border-radius: 4px;
  background-color: #fdd7db;
}
</style>
