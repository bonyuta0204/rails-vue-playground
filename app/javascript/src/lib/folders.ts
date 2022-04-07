interface Folder {
  id: number;
  label: string;
  subFolders: Folder[];
}

interface Item {
  folderId: number | null;
  label: string;
}

type FolderItemTree = Folder & {
  subFolders: FolderItemTree[];
  subItems: Item[];
};

export function buildFolderItemTree(
  folders: Folder[],
  items: Item[]
): FolderItemTree[] {
  const folderItemTree: FolderItemTree[] = [];

  folders.forEach((folder) => {
    const subFolderItemTree = folder.subFolders.length ?  buildFolderItemTree(folder.subFolders, items): []
    const subItems = items.filter((item) => item.folderId === folder.id);

    folderItemTree.push({
      id: folder.id,
      label: folder.label,
      subFolders: subFolderItemTree,
      subItems: subItems,
    });
  });

  return folderItemTree
}
