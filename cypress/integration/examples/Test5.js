/// <reference types="Cypress" />
describe('Test Table ด้วย Cypress', () => {
    it('Test Case ทดสอบ Table', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('tr td:nth-child(2)').each(($element, index, $list) => {
            const text = $element.text()
            if(text.includes('Python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then((result) => {
                    const price = result.text()
                    expect(price).to.equal('25')
                })
            }
        })
    })
})