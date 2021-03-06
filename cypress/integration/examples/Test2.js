describe('Basic UI', () => {
    it('Basic UI Test Case', () => {

        // CheckBox
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check()
        cy.get('input[type="checkbox"]').uncheck()
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])


        // Static Dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($element, index, $list) => {
            if($element.text() === 'India') {
                $element.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
        cy.get('#displayed-text').should('have.be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('have.not.be.visible')
        cy.get('[for="radio1"] > .radioButton').click().should('have.value', 'radio1')



    })
})