/// <reference types="Cypress" />
describe('should allow for csv download for N/A waivers', () => {
  before('visit waivers page', () => {
    cy.visit('localhost:4000/waivers')
  })
  it('verifies csv download', () => {
    cy.get('[data-test="csv-download"]').click()
    cy.verifyDownload('waivers.csv')
  })
})
