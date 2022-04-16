import { FolderItem } from "./folder_item";

export class FolderSidebar {
  cy: Cypress.cy;
  element: Cypress.Chainable<JQuery<HTMLElement>>;

  constructor(cy: Cypress.cy, element: Cypress.Chainable<JQuery<HTMLElement>>) {
    this.cy = cy;
    this.element = element;
  }

  folderItemByName(folderName: string) {
    return new FolderItem(this.cy, this.element.contains(folderName).parent());
  }

  folderLabelByName(folderName: string) {
    return this.element.contains(folderName);
  }
}
