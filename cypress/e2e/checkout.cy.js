import { faker } from '@faker-js/faker'
describe('Ckeckout', () => {

    const tela = ['iphone-6', 'ipad-2', 'macbook-15'];

    tela.forEach((tela) => {
        beforeEach(() => {
            cy.visit('/checkout-one');
            cy.viewport(tela); //Define o tamanho da tela para iphone 7
        });

        it.only('Validação de mensagem de sucesso', () => {
            cy.viewport(tela);
            cy.get('#fname').type(faker.person.firstName()); //Valida texto dentro do imput que é uma variável
            cy.get('#lname').type(faker.person.lastName());
            cy.get('#cname').type(faker.company.name());
            cy.get('#email').type(faker.internet.email({ provider: 'gmail.com' }));
            cy.get('#faddress').type(faker.location.streetAddress());
            cy.get('#city').type(faker.location.city());
            cy.get('#country').select('usa'); //
            cy.get('#city').select('Aland Islands');
            cy.get('#zip').type(faker.location.zipCode());
            cy.get('#faddress').type(faker.location.streetAddress());
            cy.get('#messages').type(faker.company.catchPhrase());
            cy.get('.form-check-label').click()
            cy.get('.payment_method').contains('Mobile Banking').click()
            cy.get('.checkout-area-bg > .theme-btn-one').click()
            cy.get(':nth-child(2) > h3').should('be.visible').should('contain', 'Billings Information registred with success!')
            cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
            cy.get('.offer_modal_left').contains('Order success'); //Valida o texto dentro do modal que está dentro da classe
            cy.get('.offer_modal_left').contains('Congrats! Your order was created with sucess!');
        })

        it('Validação de mensagens de erro', () => {
            cy.visit('/checkout-one');
            cy.get('.checkout-area-bg > .theme-btn-one').click()
            cy.get(':nth-child(1) > .form-group > #errorMessageFirstName').should('be.visible').should('contain', 'O campo First Name deve ser prenchido')
            cy.get(':nth-child(2) > .form-group > #errorMessageFirstName').should('be.visible').should('contain', 'O campo Last Name deve ser prenchido')
            cy.get(':nth-child(3) > .form-group > #errorMessageFirstName').should('be.visible').should('contain', 'O campo Company deve ser prenchido')
            cy.get(':nth-child(4) > .form-group > #errorMessageFirstName').should('be.visible').should('contain', 'O campo E-mail deve ser prenchido ou é inválido')
            cy.get(':nth-child(5) > .form-group > #errorMessageFirstName').should('be.visible').should('contain', 'O campo Country deve ser prenchido')
            cy.get(':nth-child(6) > .form-group > #errorMessageFirstName').should('be.visible').should('contain', 'O campo City deve ser prenchido')
            cy.get(':nth-child(7) > .form-group > #errorMessageFirstName').should('be.visible').should('contain', 'O campo Zip Code deve ser prenchido')
            cy.get(':nth-child(8) > .form-group > #errorMessageFirstName').should('be.visible').should('contain', 'O campo Address deve ser prenchido')
            cy.get(':nth-child(9) > .form-group > #errorMessageFirstName').should('be.visible').should('contain', 'O campo Additional Notes deve ser prenchido')
        })
        it('Validação de formato de e-mail', () => {
            cy.visit('/checkout-one');
            cy.get('#email').type('wilteste@com');
            cy.get('.checkout-area-bg > .theme-btn-one').click()
            cy.get(':nth-child(4) > .form-group > #errorMessageFirstName').should('be.visible').should('contain', 'O campo E-mail deve ser prenchido ou é inválido')
        })
        it('Validação de caracteres', () => {
            cy.visit('/checkout-one');
            cy.get('#zip').type('@@@@');
            cy.get('.checkout-area-bg > .theme-btn-one').click()
        })
    });


});