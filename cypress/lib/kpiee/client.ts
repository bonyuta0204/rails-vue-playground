import { FolderSidebar } from "./elements/folder_sidebar";

export class Client {
  cy: Cypress.cy;

  constructor(cy: Cypress.cy) {
    this.cy = cy;
  }

  folderSidebar() {
    return new FolderSidebar(this.cy, () => cy.get(".un_folderSidebar"));
  }
}
