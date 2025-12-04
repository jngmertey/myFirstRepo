describe("Server E2E Test", () => {
  it("Shows Hello World", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Hello World");
  });
});
