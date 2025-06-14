describe("About me interaction", () => {
  it("should render the first view (about me)", () => {
    cy.visit("http://localhost:5173");

    cy.get("p").click();
  });
});
