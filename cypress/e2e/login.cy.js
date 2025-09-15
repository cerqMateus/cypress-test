describe("Login", () => {
  it("Realizar login com sucesso", () => {
    //Arrange
    cy.visit("https://www.saucedemo.com/v1/");
    //Act

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();

    //Assert

    cy.url().should("eq", "https://www.saucedemo.com/v1/inventory.html");
  });
});

describe("Login inválido", () => {
  it("Falha ao realizar login: perfil e senha inválidos", () => {
    //Arrange
    cy.visit("https://www.saucedemo.com/v1/");

    //Act

    cy.get('[data-test="username"]').type("invalid_user");
    cy.get('[data-test="password"]').type("invalid_password");
    cy.get("#login-button").click();

    //Assert

    cy.get('[data-test="error"]').should(
      "contain.text",
      "Username and password do not match any user in this service"
    );
  });
});
