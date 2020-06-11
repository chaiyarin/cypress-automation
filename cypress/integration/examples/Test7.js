describe('Test Popup Link', () => {
    it('Test Case Popup', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#opentab').then((el) => {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://google.com')
        })
    })
})