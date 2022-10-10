import TableRow from "./TableRow.vue";
import Vue, { PropType } from "vue";
import { DisplayRow, Row } from "@/types/table";

export default Vue.component("TableRowWrap", {
  functional: true,
  props: {
    row: {
      type: Object as PropType<DisplayRow>,
      required: true,
    },
    titleColumnWidth: {
      type: Number,
      required: true,
    },
    collapsed: {
      type: Boolean,
      required: true,
    },
    depth: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  render: function (h, { props, listeners }) {
    const rowNode = h(TableRow, {
      props: {
        row: props.row,
        collapsed: props.collapsed,
        titleColumnWidth: props.titleColumnWidth,
        depth: props.depth,
      },
      on: listeners,
    });

    const subRows = props.row.subRows?.map((row: Row) =>
      h("TableRowWrap", {
        props: {
          row: row,
          collapsed: !props.row.isOpen || props.collapsed,
          titleColumnWidth: props.titleColumnWidth,
          depth: props.depth + 1,
        },
        on: listeners,
      })
    );

    return subRows ? [rowNode, ...subRows] : [rowNode];
  },
});
