/// <reference types="Cypress" />

describe('My First Test', () => {
    it('My First Test Case', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').find('.product').should('have.length', 4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(result => {
            console.log('love');
        })

        cy.get('.products').find('.product').each(($element, index, $list) => {
            const textVeg = $element.find('h4.product-name').text()
            if(textVeg.includes('Cashews')) {
                $element.find('button').click()
            }
        })

        // const brandTitle = cy.get('.brand').text()
        // cy.log(brandTitle)


        // อันนี้ก็เป็นหนึ่งในวิธีที่จะแสดง Log
        cy.get('.brand').then((result) => {
            cy.log(result.text())
        })

        // เราสามารถ assert log text ได้ด้วยเหมือนกันโดยใช้คำสั่ง
        cy.get('.brand').should('have.text', 'GREENKART')
        // cy.log(cy.get('.brand').text())

        // เราสามารถสร้าง Alias ของ Locator ได้

        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length', 4)
    })
    // https://rahulshettyacademy.com
})