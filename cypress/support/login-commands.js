//Acessar a tela de login
Cypress.Commands.add('AcessarLogin', () => {
    cy.visit('/login');
});

Cypress.Commands.add('PreencherEmail', (email) => {
    cy.get('#user').type(email)
});

Cypress.Commands.add('PreencherSenha', (senha) => {
    cy.get('#password').type(senha)
});

Cypress.Commands.add('ClicarLogin', () => {
    cy.get('#btnLogin').click()
});

Cypress.Commands.add('ValidarLogin', (mensagem) => {
        cy.get('#swal2-title')
        .should('be.visible')
        .should('contain', mensagem)
    
});

Cypress.Commands.add('ValidarLoginErro', (mensagem) => {
        cy.get('.invalid_input')
        .should('be.visible')
        .should('contain', mensagem)
    
});

Cypress.Commands.add('Login', (email, senha) => {
    cy.AcessarLogin();
    cy.PreencherEmail(email);
    cy.PreencherSenha(senha);
    cy.ClicarLogin();
    cy.ValidarLogin();
});