/// <reference types="Cypress" />
describe('Test Tab', () => {
    it('Test Case Tab', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'index')
        cy.go('back')
    })
})