/// <reference types="Cypress" />
var data
describe('Test Cypress Framework', () => {

    before(() => {
        cy.fixture('example').then(function (example_data) {
            cy.log(data)
            data = example_data
        })
    })

    it('Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice')
        cy.get('input[name="name"]:nth-child(2)').type(data.name)
        cy.get('select').select(data.gender)
        cy.get(':nth-child(2) > .nav-link').click()
        // cy.get('h4.card-title').each(($el, index, $list) => {
        //     if($el.text().includes('Blackberry'))
        //     {
        //         cy.get('button.btn.btn-info').eq(index).click()
        //     }
        // })
        data.productNames.forEach(element => {
            cy.selectProduct(element)
        });

    })
})