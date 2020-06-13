/// <reference types="Cypress" />
describe('Test Cypress Framework', () => {

    before(() => {
        cy.fixture('example').then((data) => {
            this.data = data
        })
    })

    it('Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
    })
})