/// <reference types="Cypress" />
describe('Test Mouse Hover', () => {
    it('Test Case Mouse Hover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })
})