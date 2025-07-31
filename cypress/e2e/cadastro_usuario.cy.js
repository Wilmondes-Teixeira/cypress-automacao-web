describe("Cadastro de usário", () => {
  it("Cadastro com sucesso", () => {
    cy.visit("/register");
    cy.get("#user").type("Will Tester");
    cy.get("#email").type("WillTester@gmail.com");
    cy.get("#password").type("123456789");
  });

  it("Cadastro de usuário com nome vazio", () => {
    cy.visit("/register");
    cy.get("#email").type("WillTester@gmail.com");
    cy.get("#password").type("123456789");
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName")
     .should("contain","O campo nome deve ser prenchido");
  });
});
