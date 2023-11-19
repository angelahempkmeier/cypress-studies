describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.get('#cy-title').should('exist')
    .should('have.text', 'Cypress Test for a Simple Page Application');
  })
})