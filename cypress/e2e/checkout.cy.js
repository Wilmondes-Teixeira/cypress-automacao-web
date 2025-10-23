import { faker } from '@faker-js/faker'

describe('Ckeckout', () => {
    beforeEach(() => {
        cy.visit('/checkout-one');
    });
    const tela = ['iphone-6', 'ipad-2', 'macbook-15'];

    //tela.forEach((tela) => {
    //    beforeEach(() => {
    //    cy.visit('/checkout-one');
    //    cy.viewport(tela); //Define o tamanho da tela para iphone 7
    //   });

        it('Validação de mensagem de sucesso', () => {
            //cy.viewport(tela);
            cy.Preencher();
            cy.get('.form-check-label').click()
            cy.metodoPay();
            cy.get('.checkout-area-bg > .theme-btn-one').click()
            cy.get(':nth-child(2) > h3').should('be.visible').should('contain', 'Billings Information registred with success!')
            cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
            cy.validarMensagem('Order success'); //Valida o texto dentro do modal que está dentro da classe
            cy.validarMensagem('Congrats! Your order was created with sucess!');
        })

        it('Validação de mensagens de erro', () => {
    cy.visit('/checkout-one');
    cy.get('.checkout-area-bg > .theme-btn-one').click();
    cy.validarErrosCheckout();
  });
        it.only('Validação de formato de e-mail', () => {
            cy.visit('/checkout-one');
            cy.get('#email').type(faker.internet.email({ provider: '@@will.com' }));
            cy.get('.checkout-area-bg > .theme-btn-one').click()
            cy.validação()
        });
        it('Validação de caracteres', () => {
            cy.visit('/checkout-one');
            cy.Preencher();
            cy.get('#zip').type('@@@@');
            cy.get('.checkout-area-bg > .theme-btn-one').click()
            cy.validarErrosCheckout();
        })
    });
