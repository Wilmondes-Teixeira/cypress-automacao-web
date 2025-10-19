// Importa a biblioteca Faker para geração de dados aleatórios (https://fakerjs.dev/)
import { faker } from '@faker-js/faker'

describe('Cadastro de Usuário', () => {

    // Executa antes de cada teste
    beforeEach(() => {
        cy.visit('/register');
        //cy.wait(1000); // Espera 1 segundo para garantir que a página carregou completamente
    });

    it('Cadastro com sucesso', () => {
        const name = faker.person.fullName()
        const email = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '.') }@will.com`
        const password = faker.internet.password(10)

        cy.get('#user').type(name)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#btnRegister').click();
        cy.get('#swal2-title').should('be.visible').should('contain', 'Cadastro realizado!')
        cy.get('#swal2-html-container').should('be.visible').should('contain', `Bem-vindo ${name}`)
    })

    it('Nome vazio', () => {
        
        const email = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '.') }@will.com`
        const password = faker.internet.password(10)

        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('be.visible').should('contain','O campo nome deve ser prenchido');
    });

    it('E-mail vazio', () => {
        const name = faker.person.fullName()
        const password = faker.internet.password(10)

        cy.get('#user').type(name)
        cy.get('#password').type(password)
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('be.visible').should('contain','O campo e-mail deve ser prenchido corretamente');
    });

    it('Senha vazio', () => {
        const name = faker.person.fullName()
        const email = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '.') }@will.com`

        cy.get('#user').type(name)
        cy.get('#email').type(email)
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Cadastro vazio', () => {
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('be.visible').should('contain','O campo nome deve ser prenchido');
    });
    it('E-mail inválido', () => {
        const name = faker.person.fullName()
        const password = faker.internet.password(10)

        cy.get('#user').type(name)
        cy.get('#email').type(faker.person.fullName())
        cy.get('#password').type(password)
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('be.visible').should('contain','O campo e-mail deve ser prenchido corretamente');
    });
    it('Senha inválido', () => {

        cy.get('#user').type(faker.person.fullName())
        cy.get('#email').type(faker.internet.email({ provider: 'will.com' }))
        cy.get('#password').type(faker.internet.password({ length: 3 }))
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo senha deve ter pelo menos 6 dígitos');
    });
});