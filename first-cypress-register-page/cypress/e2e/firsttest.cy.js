describe('register page', () => {
  it('renders the default element on the screen', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.get('#cy-title').should('exist')
    .should('have.text', 'Cypress Test for a Simple Page Application');
  });

  it('the name is completed and it\'s not empty', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.wait(4000);
    cy.get('#name').should('exist').and('have.value', 'angela');

  });
})