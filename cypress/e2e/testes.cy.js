describe('Teste da tela de ckeckout', () => {
    it('Validação de mensagem de sucesso' , () => {
        cy.visit('/checkout-one')
        cy.get('#fname').type('Wilmondes');
        cy.get('#lname').type('Alves');
        cy.get('#cname').type('Empresa X');
        cy.get('#email').type('wilteste@gmail.com');
        cy.get('#faddress').type('Rua teste, 123');
        cy.get('#city').type('São Paulo');
        cy.get('#country').select('usa'); //
        cy.get('#city').type('Aland Islands');
        cy.get('#zip').type('12345-678');
        cy.get('#faddress').type('Rua teste, 123');
        cy.get('#messages').type('Teste de mensagem');
        cy.get('.form-check-label').click()
        cy.get('.payment_method').contains('Mobile Banking').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get(':nth-child(2) > h3').should('be.visible').should('contain', 'Billings Information registred with success!')
    })
    it('Validação de mensagens de erro' , () => {
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
    it('Validação de formato de e-mail' , () => {
    cy.visit('/checkout-one');
    cy.get('#email').type('wilteste@com');
    cy.get('.checkout-area-bg > .theme-btn-one').click()
    cy.get(':nth-child(4) > .form-group > #errorMessageFirstName').should('be.visible').should('contain', 'O campo E-mail deve ser prenchido ou é inválido')
    })
    it('Validação de caracteres' , () => {
    cy.visit('/checkout-one');
    cy.get('#zip').type('@@@@');
    cy.get('.checkout-area-bg > .theme-btn-one').click()
    })
});