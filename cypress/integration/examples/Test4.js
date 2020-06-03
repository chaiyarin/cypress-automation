/// <reference types="Cypress" />
describe('Test Tab', () => {
    it('Test Case Tab', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
    })
})