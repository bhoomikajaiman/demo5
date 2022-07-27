describe('My First Cypress Test', function() {
  it('Visits the login page', function() {
  //Visit the Demo QA Website
  cy.wait(500)
  cy.visit("http://localhost:8080/TomcatMavenApp/");
})
})