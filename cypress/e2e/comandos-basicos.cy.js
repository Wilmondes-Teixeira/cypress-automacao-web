// Teste básico de exemplo Cypress

describe('Comandos básicos', () => {
  it('Acessar uma URL', () => {
    cy.visit('https://automationpratice.com.br/')
  })

  it('Encontrar elementos', () => {
    //encontrar o elemento que queremos interagir
    cy.visit('https://automationpratice.com.br/login')

    //get() -> buscar um elemento na página
    cy.get('#user').type('teste')

    //find() -> buscar um elemento dentro de outro elemento
    //diminui o escopo de busca com o GET() antes
    cy.get('.mc-form').find('.form-control').type('Teste');

    //contains() -> buscar um elemento pelo texto
    //diminui o escopo de busca com o GET() antes
    cy.get('.mc-form').contains('Send Mail') 
  });

  it('Preencher  campo e-mail', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('Wilmondes@gmail.com{enter}'); //{enter} -> simula o enter do teclado
  })

  it('Clicar no elemento', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#btnLogin').click();
    // cy.get('#btnLogin').rigthclick(); //clique com o botão direito
    // cy.get('#btnLogin').dbclick();  //duplo clique
  })

  it('Select', () => {
    cy.visit('https://automationpratice.com.br/checkout-one')
    cy.get('#country').select('usa') //seleciona o valor do option
  })

  it('Checkbox/Radio', () => {
    cy.visit('https://automationpratice.com.br/checkout-one')
    cy.get('#materialUnchecked').check() //marca o checkbox
    // cy.get('#material-unchecked').uncheck() desmarca o checkbox
    cy.get('#CSS').check() //marca o radio
  })

  it.only('Validar um texto', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#createAccount').should('be.visible').should('contain', 'Ainda não tem conta?') //verifica se o elemento está visível e se contem o texto
  })
})
