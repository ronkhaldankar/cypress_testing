describe('navigation tests', () => {
  it('test opening and closing sidebar', () => {
    // cy.visit('https://example.cypress.io')
    // baseUrl: 'http://localhost:3000'
    cy.visit("/")
    cy.get('[data-id="open-sidebar"]').should('not.be.exist')
    cy.get('[data-id="open-sidebar-btn"]').click()
    cy.get('[data-id="open-sidebar"]').should('be.visible')
    cy.get('[data-id="close-sidebar-btn"]').should('be.visible')
    cy.get('[data-id="close-sidebar"]').should('not.be.exist')
  })

  it('test navigation', () => {
    cy.visit('/')
    cy.get('[data-id="open-sidebar-btn"]').click()
    cy.contains(/about Me/i).should('not.exist')
    cy.get('[data-id="about-link"]').click()
    cy.get('[data-id="close-sidebar"]').should('not.be.exist')

    cy.contains(/about Me/i)
  })

  it('test navigation for settings', () => {
    cy.visit('/')
    cy.get('[data-id="open-sidebar-btn"]').click()
    cy.contains(/To-Do list/i).should('not.exist')
    cy.get('[data-id="setting-link"]').click()
    cy.get('[data-id="close-sidebar"]').should('not.be.exist')

    cy.contains(/To-Do list/i)
  })



})