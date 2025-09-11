describe("Interagir com o carrinho", () => {
  it("Adicionar produto ao carrinho", () => {
    //Arrange
    cy.visit("https://www.saucedemo.com/v1/");

    cy.get('[data-test="username"]').type("standard_user");

    cy.get("[data-test=password]").type("secret_sauce");

    cy.get("#login-button").click();

    //Act

    cy.contains(".inventory_item", "Sauce Labs Backpack")
      .find("button.btn_primary")
      .click();

    //Assert
    cy.contains(".inventory_item", "Sauce Labs Backpack")
      .find(".btn_secondary")
      .should("be.visible");

    cy.get("span.fa-layers-counter").should("be.visible").and("have.text", "1");
  });

  it("Produto no carrinho é o mesmo que foi adicionado", () => {});
});
