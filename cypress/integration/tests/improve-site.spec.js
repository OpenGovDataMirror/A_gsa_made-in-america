/// <reference types="Cypress" />
describe('check that the to improve site button works', () => {
  it('should open pop up and be able to be typed in', () => {
    cy.getUrlsArray().then($urls => {
      $urls.forEach(url => {
        cy.visit(url).then(() => {
          cy.get('[class="fixed-tab-button usa-button"]').click()
          cy.get('[class="wrapper"]').should('be.visible')
          cy.get('[id="answer_01"]').type('test')
          cy.get('[id="answer_03"]').type('test')
          cy.get(
            '[href="https://www.gsa.gov/reference/gsa-privacy-program/privacy-act-statement-for-design-research"]'
          ).should('have.attr', 'target', '_blank')
          cy.get('[href="https://touchpoints.app.cloud.gov/"]').should(
            'have.attr',
            'target',
            '_blank'
          )
        })
      })
    })
  })
})
