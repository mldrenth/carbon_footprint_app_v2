// Old tests for input fields instead of slider, update needed

describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.viewport(1200, 800);
  }); // ADDED


  it("Loads the app", () => {
    const header = cy.get('h1'); 
}) 

it("Has value of Vegan on load", () => {
    const veganChecked = cy.get('#vegan');
    veganChecked.should('have.value', 'vegan')
})

it("USer can select value", () => {
    // cy.get('[type="radio"]').first().check() // select by type
    const dietInput = cy.get('[type="radio"].dietHigh').first().check(); 
    dietInput.should('have.value', 'highMeat')
    
} )  //Does not return right value



//End setup func
});
