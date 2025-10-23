export function acessarLogin() {
    cy.visit('/login');
}

export function preencherEmail(email) {
    cy.get('#user').type(email)
}

export function preencherSenha(senha) {
    cy.get('#password').type(senha)
}

export function clicarLogin() {
    cy.get('#btnLogin').click()
}

export function validarLoginErro(mensagem) {
    cy.get('.invalid_input')
        .should('be.visible')
        .should('contain', mensagem)

}

export function validarLogin(mensagem) {
        cy.get('#swal2-title')
        .should('be.visible')
        .should('contain', mensagem)
};

//comand e page objects é a mesma coisa?
//Organizar tudo e colocar em padrão page objetct