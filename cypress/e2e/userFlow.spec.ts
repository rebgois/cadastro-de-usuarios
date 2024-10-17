// cypress/e2e/userFlow.spec.ts
describe("Fluxo de Usuários", () => {
  it("Deve adicionar, listar e deletar um usuário", () => {
    cy.visit("/");

    // Adicionar um novo usuário
    cy.get('input[name="name"]').type("Usuário Teste");
    cy.get('input[name="email"]').type("teste@user.com");
    cy.get('input[name="password"]').type("123456");
    cy.contains("Salvar").click();

    // Verificar se o usuário aparece na lista
    cy.visit("/users");
    cy.contains("Usuário Teste");

    // Deletar o usuário
    cy.contains("Usuário Teste")
      .parent()
      .find("button")
      .contains("Deletar")
      .click();

    // Verificar se o usuário foi removido
    cy.contains("Usuário Teste").should("not.exist");
  });
});
