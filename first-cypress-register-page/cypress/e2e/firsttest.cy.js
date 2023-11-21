describe('register page', () => {
  it('renders the default element on the screen', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.get('#cy-title').should('exist')
    .should('have.text', 'Cypress Test for a Simple Page Application');
  });

  it('the name is filled and it\'s not empty', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.wait(4000);
    cy.get('#name').should('exist');
    cy.get('#name').invoke('val').should('not.be.empty');
  });

  it('the last name is filled and it\'s not empty', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.wait(4000);
    cy.get('#lastname').should('exist');
    cy.get('#lastname').invoke('val').should('not.be.empty');
  });

  it('validation of the email input', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.get('#email').should('exist');
    cy.get('#email').invoke('val').should('not.be.empty');
    cy.get('#email').then(($input) => {
      const enteredEmail = $input.val();
      expect(enteredEmail).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });
  });
})