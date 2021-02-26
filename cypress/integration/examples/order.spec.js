describe('Order app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/Order')
    })

    // it('sanity check to make sure our tests work', () => {
    //     expect(1 + 1).to.equal(2)
    //     expect(1 + 1).not.to.equal(3)
    //     expect(7).to.equal(7)
    //     expect({}).not.to.equal({})
    //     expect({}).to.eql({})
    //     //passed
    // })

    //Tests:
    //Add text to name box
    const nameInput = () => cy.get('input[name=name]')

    describe('Can type in name box', () => {
        it('can type in name input', () => {
                        nameInput()
                .type('This is cypress testing the name input')
                .should('have.value', 'This is cypress testing the name input')
        })
    })

    //select multiple toppings
    const pepperoni = () => cy.get('input[name=Pepperoni]')
    const sausage = () => cy.get('input[name=Sausage]')
    const pineapple = () => cy.get('input[name=Pineapple]')

    describe('Can select multiple toppings', () => {
        it('can select multiple toppings', () => {
            pepperoni().click().should('be.checked')
            sausage().click().should('be.checked')
            pineapple().click().should('be.checked')
        })
    })

    //can submit
    const submit = () => cy.get('button')
    describe('Can submit data', () => {
        it('can submit order', () => {
            nameInput().type('Cypress Test')
            cy.get('select[name=size]').select('12')
            cy.get('[type=radio]').first().check()
            pepperoni().click()
            sausage().click()
            pineapple().click()
            submit().should('be.enabled')
            submit().click()
        })
    }) 
})