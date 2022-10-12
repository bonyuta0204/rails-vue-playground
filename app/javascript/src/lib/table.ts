import {
  DisplayRow,
  DisplayTableSection,
  Row,
  RowOpenState,
  SectionOpenState,
  TableSection,
} from "@/types/table";

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

export function mergeOpenState(
  sections: TableSection[],
  sectionOpenState: SectionOpenState,
  rowOpenState: RowOpenState
): DisplayTableSection[] {
  return sections.map((section) => {
    const isOpen = sectionOpenState[section.id];

    const subSections = section.subSections.map((subSection) => {
      const rows = mergeRowOpenState(subSection.subRows, rowOpenState);

      return {
        ...subSection,
        subRows: rows,
      };
    });

    const subRows =
      section.subRows && mergeRowOpenState(section.subRows, rowOpenState);

    return {
      ...section,
      isOpen,
      subSections,
      subRows,
    };
  });
}
