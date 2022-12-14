import { addCustomCommand as verifyFileDownload } from 'cy-verify-downloads'

Cypress.Commands.add('getUrlsArray', () => {
  cy.request({
    url: 'http://localhost:4000/sitemap.xml',
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
    },
  })
    .as('sitemap')
    .then(response =>
      Cypress.$(response.body)
        .find('loc')
        .toArray()
        .map(el => el.innerText)
    )
})

verifyFileDownload()
