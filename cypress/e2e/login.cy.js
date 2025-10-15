describe('Login', () => {
    it('Login com sucesso', () => {
        cy.visit('/login') //usa a URL base definida no cypress.config.js
        cy.get('#user').type('teste@gmail.com')
        cy.get('#password').type('teste123')
        cy.get('#btnLogin').click()

    });

    it.only('Campos obrigatórios vazios', () => {
        cy.visit('/login')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible').should('contain', 'E-mail inválido.')
    });

    it.only('Senha obrigatória vazia', () => {
        cy.visit('/login')
        cy.get('#user').type('teste@gmail.com')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible').should('contain', 'Senha inválida.')
    });
});