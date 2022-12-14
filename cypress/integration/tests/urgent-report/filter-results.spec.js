/// <reference types="Cypress" />
describe('filter results for Urgent waivers', () => {
  before('visit site', () => {
    cy.visit('localhost:4000/urgent-reports')
  })
  beforeEach('create alias', () => {
    cy.get('[data-test="filter-select"] select').children().as('filter-options')
  })
  it('UI changes when filter is selected', () => {
    cy.get('@filter-options').then(filterOptions => {
      filterOptions.each(option => {
        if (filterOptions[option].value !== 'all') {
          cy.get('[data-test="filter-select"] select')
            .select(filterOptions[option].value)
            .should('have.value', filterOptions[option].value)
        }
      })
    })
  })
})
