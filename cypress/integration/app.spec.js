describe('Title', () => {
  it('has a title of Tic-Tac-Toe', () => {
    cy.visit('http://localhost:3000');
    cy.title().should('eq', 'Tic-Tac-Toe');
  });
});
