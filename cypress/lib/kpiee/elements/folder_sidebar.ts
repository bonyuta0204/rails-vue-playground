import { FolderItem } from "./folder_item";

export class FolderSidebar {
  cy: Cypress.cy;
  targetElemnt: () => Cypress.Chainable<JQuery<HTMLElement>>;

  constructor(
    cy: Cypress.cy,
    targetElemnt: () => Cypress.Chainable<JQuery<HTMLElement>>
  ) {
    this.cy = cy;
    this.targetElemnt = targetElemnt;
  }

  folderItemByName(folderName: string) {
    return new FolderItem(this.cy, () =>
      this.targetElemnt().contains(folderName).parent()
    );
  }

  folderLabelByName(folderName: string) {
    return this.targetElemnt().contains(folderName);
  }
}
