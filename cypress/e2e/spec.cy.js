describe('My First Cypress Test', function() {
  it('Visits the login page', function() {
  //Visit the Demo QA Website
  cy.wait(500)
  cy.visit("http://localhost:8080/TomcatMavenApp/");
})
})

describe('Login Tests', function () {
  it('Successfull login', function () {
      cy.visit('http://localhost:8080/TomcatMavenApp/')

      cy.get(':nth-child(1) > .form-control')
      .type('test@test.com')

      cy.get(':nth-child(2) > .form-control')
      .type('test')

      cy.get('.btn')
      .click()

      cy.url()
      .should('contain', 'http://localhost:8080/TomcatMavenApp/')
      cy.get(':nth-child(4) > .nav-link')
      .should('have.attr', 'href', '/@test')
      cy.get(':nth-child(3) > .nav-link')
      .should('have.attr', 'href', '/settings')
      cy.get('.container > .nav > :nth-child(2) > .nav-link')
      .should('have.attr', 'href', '/editor')
  })
})