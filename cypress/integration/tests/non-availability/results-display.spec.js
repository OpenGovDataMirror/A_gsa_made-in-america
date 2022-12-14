/// <reference types="Cypress" />

Cypress.on(
  'uncaught:exception',
  () =>
    // returning false here prevents Cypress from
    // failing the test
    false
  // accordon structure error from USWDS we are ingoreing
)

describe('results display for N/A waivers', () => {
  before('let site load', () => {
    cy.visit('localhost:4000/waivers')
  })
  beforeEach('setting up test alias', () => {
    cy.get('[data-test="filter-select"] select').children().as('filter-options')
    cy.get('usa-accordion').children().as('accordion-elements')
  })
  it('check that accordion header has text present', () => {
    cy.get('[data-test="accordion-header"]')
      .children()
      .each(child => child[0].innerText.length > 0)
  })
  it('check term Non-availability is not present on waiver page', () => {
    cy.get('[data-test="waiver-page-content"]')
      .should('not.contain.text', 'Non-availability')
      .should('not.contain.text', 'non-availability')
    // this test provides covearge for the waivers page, since it is a dymanic page the test attributes have been added to areas of the page that have content. This test will skip over waivers present on the page since those are changing based on submissions.  Please see 'non-availability-check.spec.js' for full site coverage
  })
  it('accordion should open when clicked', () => {
    cy.get('[data-test="accordion-header"]')
      .click({ multiple: true })
      .get('[data-test="omb-determination"]')
      .should('be.visible')
  })
  it('check that no fields are empty', () => {
    cy.get('@accordion-elements').then(accordionElements => {
      cy.get(accordionElements[0])
        .find('[data-test="accordion-header"]')
        .children()
        .children()
        .each(child => child[0].innerText.length > 0)
      cy.get(accordionElements[1])
        .find('[data-test="accordion-content"]')
        .find('p')
        .each(detail => detail[0].innerText.length > 0)
    })
  })
  it('omb determination should be based on status', () => {
    cy.get('@filter-options').then(filterOptions => {
      filterOptions.each(option => {
        if (filterOptions[option].value !== 'all') {
          cy.get('[data-test="filter-select"] select')
            .select(filterOptions[option].value)
            .should('have.value', filterOptions[option].value)
          if (filterOptions[option].value === 'Reviewed') {
            cy.get('[data-test="omb-determination"]')
              .invoke('text')
              .should('include', 'Policy')
          } else {
            cy.get('[data-test="omb-determination"]')
              .invoke('text')
              .should('include', 'N/A')
          }
        }
      })
    })
  })
  it('psc code is a number, is included in product details', () => {
    cy.get('@accordion-elements').then(accordionElements => {
      cy.get(accordionElements[0])
        .find('[data-test="psc-code"]')
        .invoke('text')
        .should($pscCode => {
          expect($pscCode).to.match(/^[A-Za-z0-9\s]*$/)
        })
        .then($pscCode => {
          cy.get(accordionElements[1])
            .find('[data-test="product-details-group"]')
            .invoke('text')
            .should('contains', $pscCode.trim())
        })
    })
  })
  it('NAICS code should be present in descriptor', () => {
    cy.get('@accordion-elements').then(accordionElements => {
      cy.get(accordionElements[1])
        .find('[data-test="industry-details-group"]')
        .invoke('text')
        .should($detailsText => {
          const regExp = /\(([^)]+)\)/g
          const pscCode = regExp.exec($detailsText)
          expect(pscCode[1]).to.match(/^[0-9\s]*$/)
        })
    })
  })
})
