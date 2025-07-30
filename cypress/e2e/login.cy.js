describe('Login', () => {

  it('Deve realizar login com sucesso', () => {
    cy.visit('https://automationpratice.com.br/login');

    cy.get('#user').type('wilzinhoGameplay@gmail.com');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();

    cy.get('#swal2-title')
      .should('contain', 'Login realizado');
  });

});