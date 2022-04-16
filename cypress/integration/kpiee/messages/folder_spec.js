import { Client } from "../../../lib/kpiee/client";

beforeEach(() => {
  cy.intercept(
    {
      method: "GET",
      url: "ajax/workspaces/*/folders",
    },
    {
      items: [
        {
          id: 1,
          name: "親フォルダ_1",
          sub_folders: [{ id: 3, name: "子フォルダ_1", sub_folders: [] }],
        },
        { id: 2, name: "親フォルダ_2", sub_folders: [] },
      ],
    }
  ).as("getFolders"); // and assign an alias

  cy.intercept(
    {
      method: "GET",
      url: "ajax/workspaces/*/tips/labels",
    },
    {
      items: [
        {
          id: 1,
          label: "チップ1",
          bookmarked: false,
          folder_id: 1,
        },
        {
          id: 2,
          label: "チップ2",
          bookmarked: false,
          folder_id: 2,
        },
        {
          id: 3,
          label: "チップ3",
          bookmarked: false,
          folder_id: 3,
        },
      ],
    }
  ).as("getLabels");
});

const client = new Client(cy);

describe("Folders in Message Page", () => {
  it("Can Display Folders", () => {
    cy.visit("workspaces/1/tips/messages");

    client
      .folderSidebar()
      .folderLabelByName("親フォルダ_1")
      .should("be.visible");
    client
      .folderSidebar()
      .folderLabelByName("親フォルダ_2")
      .should("be.visible");

    cy.contains("子フォルダ_1").should("not.exist");
    client.folderSidebar().folderItemByName("親フォルダ_1").toggleOpen();
    cy.contains("子フォルダ_1").should("be.visible");
  });
});
