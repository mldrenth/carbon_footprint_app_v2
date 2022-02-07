// Old tests for input fields instead of slider, update needed

describe('Electricity', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')

  }) // ADDED

  it("Loads the app", () => {
    const header = cy.get('h1')
  })

  it("Has an inital value of an empty string", () => {
    const elecInput = cy.get('#electricity-input')
    elecInput.should('have.value', '')
  })

  it("Can take input value 7000", () => {
    const elecInput = cy.get('#electricity-input')
    elecInput.type(7000)


  })

  it("Can change value after first input", () => {
    const elecInput = cy.get('#electricity-input')
    elecInput.type(7000)
    elecInput.clear()
    elecInput.type(8000)
    elecInput.should('have.value', 8000)
  })


})
