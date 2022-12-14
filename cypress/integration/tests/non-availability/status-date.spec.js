/// <reference types="Cypress" />
describe('check status date on N/A waivers page', () => {
  before('visit site', () => {
    cy.visit('localhost:4000/waivers')
  })
  it('check that date is present and formatted correctly', () => {
    cy.get('[data-test="status-date"]').should('be.visible')
    cy.get('[data-test="status-date"]')
      .first()
      .invoke('html')
      .should('match', /(0|1)[0-9]\/[0-3][0-9]\/(20)[0-9]{2}/)
  })
})
