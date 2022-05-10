context('Base', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('xxxx', () => {
    cy.url()
      .should('eq', 'http://localhost:666/');
  });
});
