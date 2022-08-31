describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.intercept("GET", "/ajax/users", { fixture: "users.json" });
    cy.visit("/");
  });
});
