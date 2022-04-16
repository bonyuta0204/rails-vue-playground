describe('kpiee login teset', () => {
  it('finds kpiee logo', () => {
    cy.visit('https://app.kpiee.com')

    cy.contains('メールアドレス')

    cy.get(".bl_kpInput[type='email']").type('yuta.nakamura@data-x.com')
    cy.get(".bl_kpInput[type='password']").type('Yutabon0204!')

    cy.get(".bl_kpCheckbox + label").click()

    cy.get(".bl_kpBtn__login").click()

    cy.url().should('include', '/select')
  })
})
