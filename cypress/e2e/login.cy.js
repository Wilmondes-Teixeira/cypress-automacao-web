describe("Login", () => {
  it("Deve realizar login com sucesso", () => {
    cy.visit("/login");

    cy.get("#user").type("wilzinhoGameplay@gmail.com");
    cy.get("#password").type("123456");
    cy.get("#btnLogin").click();

    cy.get("#swal2-title").should("contain", "Login realizado");
  });

  it("Login com senha inválida", () => {
    cy.visit("/login");
    cy.get("#user").type("Testando@gmail.com");
    cy.get("#password").type("1234"); //regra da api não permitir login com senha menor que seis dígitos
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain", "Senha inválida");
  });

  it("Login com senha vazia", () => {
    cy.visit("/login");
    cy.get("#user").type("Testando@gmail.com");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain", "Senha inválida");
  });

  it("Login com E-mail inválido", () => {
    cy.visit("/login");
    cy.get("#user").type("Testando.com");
    cy.get("#password").type("123456");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain", "E-mail inválido");
  });

  it("Login com E-mail vazio", () => {
    cy.visit("/login");
    cy.get("#password").type("123456");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain", "E-mail inválido");
  });

  it("Login com E-mail e Senha vazios", () => {
    cy.visit("/login");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain", "E-mail inválido");
    
  });
});
