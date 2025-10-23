import {faker} from '@faker-js/faker';
// importar todas as funções exportadas como um namespace
import * as login_page from '../support/pages/login-page'; //importando como objeto

describe('Login', () => {
    it('Login com sucesso', () => {
        //cy.visit('/login') //usa a URL base definida no cypress.config.js
        login_page.acessarLogin();
        login_page.preencherEmail('wilmondes@gmail.com');
        login_page.preencherSenha('123456');
        login_page.clicarLogin();
        login_page.validarLogin('Login realizado');

    });

    it('Campos obrigatórios vazios', () => {
        login_page.acessarLogin();
        login_page.preencherEmail(' ');
        login_page.preencherSenha(' ');
        cy.get('#btnLogin').click();
        login_page.validarLoginErro('E-mail inválido.');
    });

    it('Senha obrigatória vazia', () => {
        login_page.acessarLogin();
        login_page.preencherEmail(faker.internet.email());
        login_page.preencherSenha(' ');
        cy.get('#btnLogin').click();
        login_page.validarLoginErro('Senha inválida.');
    });

    it('Envio dos campos com valor em branco', () => {
        login_page.acessarLogin();
        cy.get('#btnLogin').click();
        login_page.validarLoginErro('E-mail inválido.');
    });
});