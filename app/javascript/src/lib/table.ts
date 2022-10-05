import { DisplayRow, Row, RowOpenState } from "@/types/table";

export function mergeRowOpenState(
  rows: Row[],
  rowOpenState: RowOpenState
): DisplayRow[] {
  return rows.map((row) => {
    const isOpen = rowOpenState[row.id];

    if (row.subRows) {
      return {
        ...row,
        isOpen: isOpen,
        subRows: mergeRowOpenState(row.subRows, rowOpenState),
      };
    } else {
      return { ...row, isOpen: isOpen };
    }
  });
}
