import Login from "../pages/login";

describe("Login", () => {
  it("Realizar login com sucesso", () => {
    //Arrange
    Login.visitarPagina();
    //Act
    Login.preencherCredenciaisValidas();

    //Assert

    cy.url().should("eq", "https://www.saucedemo.com/v1/inventory.html");
  });
});

describe("Login inválido", () => {
  it("Falha ao realizar login: perfil e senha inválidos", () => {
    //Arrange
    cy.visit("https://www.saucedemo.com/v1/");

    //Act

    cy.get().type("invalid-user");

    cy.get().type("invalid-password");

    cy.get().click();

    //Assert

    cy.get('[data-test="error"]').should(
      "contain.text",
      "Username and password do not match any user in this service"
    );
  });
});
