/// <reference types="cypress" />

describe("Comandos básicos", () => {
  it("Acessar uma URL", () => {
    cy.visit("https://automationpratice.com.br/login");
  });

  it("Encontrar elementos", () => {
    cy.visit("https://automationpratice.com.br/login");

    // get() - Selecionar um elemento
    cy.get("#user");

    // find() - Diminuir escopo de busca
    cy.get("#mc_embed_signup").find(".form-control");

    // contains() - Procurar por texto
    cy.get(".footer_one_widget").contains("Send Mail");
  });

  it("Preencher um campo", () => {
    cy.visit("https://automationpratice.com.br/login");

    cy.get("#mc_embed_signup")
      .find(".form-control")
      .type("wilmondes.tester@gmail.com");
  });

  it("Clicar no elemento", () => {
    cy.visit("https://automationpratice.com.br/login");

    cy.get("#btnLogin").click();
    // cy.get('#btnLogin').dblclick();  // Duplo clique
    // cy.get('#btnLogin').rightclick(); // Clique com botão direito
  });

  it("Preencher e pressionar Enter", () => {
    cy.visit("https://automationpratice.com.br/login");

    cy.get("#mc_embed_signup")
      .find(".form-control")
      .type("wilmondes.tester@gmail.com{enter}");
  });

  it("Selecionar item em dropdown", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");

    cy.get("#country").select("usa");
    cy.get("#country").select(1); // Seleciona pelo índice
  });

  it("Checkbox e Radio Button", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");

    cy.get("#materialUnchecked").check();
    // cy.get('#materialUnchecked').uncheck();

    cy.get("#css").check();
  });

  it.only("Validar um texto", () => {
    cy.visit("https://automationpratice.com.br/login");

    cy.get("#createAccount")
      .should("contain", "Ainda não tem conta?")
      .and("be.visible");
  });
});
