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
    //can submit
})