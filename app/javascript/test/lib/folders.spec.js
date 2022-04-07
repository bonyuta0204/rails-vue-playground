import { buildFolderItemTree } from "../../src/lib/folders.ts";

const tips = [
  { folderId: null, label: "tip1" },
  { folderId: 1, label: "tip2" },
  { folderId: 2, label: "tip3" },
  { folderId: 3, label: "tip4" },
];

describe("buildFolderItemTree", () => {
  test("folders are empty", () => {
    const folders = [];
    const result = buildFolderItemTree(folders, tips);
    expect(result).toEqual([]);
  });

  test("folder does not sub folders", () => {
    const folders = [
      {
        id: 1,
        label: "parent1",
        subFolders: [],
      },
    ];
    const result = buildFolderItemTree(folders, tips);
    expect(result).toEqual([
      {
        id: 1,
        label: "parent1",
        subFolders: [],
        subItems: [{ folderId: 1, label: "tip2" }],
      },
    ]);
  });

  test("folder have sub folders", () => {
    const folders = [
      {
        id: 1,
        label: "parent1",
        subFolders: [
          { id: 2, label: "children1-1", subFolders: [] },
          { id: 3, label: "children1-2", subFolders: [] },
        ],
      },
    ];
    const result = buildFolderItemTree(folders, tips);
    expect(result).toEqual([
      {
        id: 1,
        label: "parent1",
        subFolders: [
          {
            id: 2,
            label: "children1-1",
            subFolders: [],
            subItems: [{ folderId: 2, label: "tip3" }],
          },
          {
            id: 3,
            label: "children1-2",
            subFolders: [],
            subItems: [{ folderId: 3, label: "tip4" }],
          },
        ],
        subItems: [{ folderId: 1, label: "tip2" }],
      },
    ]);
  });
});
