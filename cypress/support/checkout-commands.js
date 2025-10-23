import { faker } from '@faker-js/faker';

Cypress.Commands.add('Preencher', () => {
    cy.get('#fname').type(faker.person.firstName()); //Valida texto dentro do imput que é uma variável
    cy.get('#lname').type(faker.person.lastName());
    cy.get('#cname').type(faker.company.name());
    cy.get('#email').type(faker.internet.email({ provider: 'will.com' }));
    cy.get('#faddress').type(faker.location.streetAddress());
    cy.get('#city').type(faker.location.city());
    cy.get('#country').select('usa'); //
    cy.get('#city').select('Aland Islands');
    cy.get('#zip').type(faker.location.zipCode());
    cy.get('#faddress').type(faker.location.streetAddress());
    cy.get('#messages').type(faker.company.catchPhrase());
});

Cypress.Commands.add('metodoPay', () => {
    cy.get('.payment_method').contains('Mobile Banking').click()
})

Cypress.Commands.add('validarMensagem', (mensagem) => {
    cy.get('.offer_modal_left')
        .contains(mensagem)
});

//Estudar mais sobre array e for each
Cypress.Commands.add('validarErrosCheckout', () => {
  const erros = [
    { selector: ':nth-child(1) > .form-group > #errorMessageFirstName', mensagem: 'O campo First Name deve ser prenchido' },
    { selector: ':nth-child(2) > .form-group > #errorMessageFirstName', mensagem: 'O campo Last Name deve ser prenchido' },
    { selector: ':nth-child(3) > .form-group > #errorMessageFirstName', mensagem: 'O campo Company deve ser prenchido' },
    { selector: ':nth-child(4) > .form-group > #errorMessageFirstName', mensagem: 'O campo E-mail deve ser prenchido ou é inválido' },
    { selector: ':nth-child(5) > .form-group > #errorMessageFirstName', mensagem: 'O campo Country deve ser prenchido' },
    { selector: ':nth-child(6) > .form-group > #errorMessageFirstName', mensagem: 'O campo City deve ser prenchido' },
    { selector: ':nth-child(7) > .form-group > #errorMessageFirstName', mensagem: 'O campo Zip Code deve ser prenchido' },
    { selector: ':nth-child(8) > .form-group > #errorMessageFirstName', mensagem: 'O campo Address deve ser prenchido' },
    { selector: ':nth-child(9) > .form-group > #errorMessageFirstName', mensagem: 'O campo Additional Notes deve ser prenchido' }
  ];

  erros.forEach(({ selector, mensagem }) => {
    cy.get(selector)
      .should('be.visible')
      .and('contain', mensagem);
  });

});

Cypress.Commands.add('validação', () => {
cy.get(':nth-child(4) > .form-group > #errorMessageFirstName')
.should('be.visible')
.should('contain','O campo E-mail deve ser prenchido ou é inválido')
})