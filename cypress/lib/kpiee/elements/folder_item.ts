export class FolderItem {
  cy: Cypress.cy;
  element: Cypress.Chainable<JQuery<HTMLElement>>;

  constructor(cy: Cypress.cy, element: Cypress.Chainable<JQuery<HTMLElement>>) {
    this.cy = cy;
    this.element = element;
  }

  toggleOpen() {
    this.element.find(".un_folderItem_toggleIcon").click();
  }
}
