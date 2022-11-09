describe('Google search', () => {
  it('Open a google search', () => {
    cy.visit('https://www.google.co.uk')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('.gLFyf').type("cypress in Azufe DEvops {enter}")
     cy.get('body').should('contain','Cypress')
  })
})
