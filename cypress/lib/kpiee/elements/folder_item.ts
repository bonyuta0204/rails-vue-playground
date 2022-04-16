export class FolderItem {
  cy: Cypress.cy;
  targetElemnt: () => Cypress.Chainable<JQuery<HTMLElement>>;
  targetPopover: () => Cypress.Chainable<JQuery<HTMLElement>> | null;

  constructor(
    cy: Cypress.cy,
    targetElemnt: () => Cypress.Chainable<JQuery<HTMLElement>>
  ) {
    this.cy = cy;
    this.targetElemnt = targetElemnt;
    this.targetPopover = null;
  }

  toggleOpen() {
    this.targetElemnt().find(".un_folderItem_toggleIcon").click();
  }

  togglePopover() {
    this.targetElemnt().find(".un_folderItem_toolIcon").click({ force: true });
    this.targetPopover = () => this.cy.get(".popover-body");
  }

  openFolderMoveModal() {
    if (this.targetPopover) {
      this.targetPopover().contains("フォルダにチップを移動").click();
    }
  }
}
