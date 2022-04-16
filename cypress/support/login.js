before(() => {
  cy.request("POST", "https://stg.kpiee.xyz/ajax/auth/sign_in", {
    email: "yuta.nakamura@data-x.com",
    password: "Yutabon0204!",
  });
});
