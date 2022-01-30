describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.viewport(1200, 800);
  }); // ADDED

  it("Loads the app", () => {
    const header = cy.get("h1");
  });
  //
  it("Has value of zero on load", () => {
    const domesticNum = cy.get("#domestic");
    domesticNum.should("have.value", "0");
  });
  //
  it("Has value of zero on load", () => {
    const shortHaulNum = cy.get("#shortHaul");
    shortHaulNum.should("have.value", "0");
  });
  //
  it("Has value of zero on load", () => {
    const longHaulNum = cy.get("#longHaul");
    longHaulNum.should("have.value", "0");
  });

  it("Can change input field value and updates", () => {

    
      
    // const domesticChange = cy.get('input[id="domestic"]').type('10').trigger('change')
    // domesticChange.should("have.value", 1)

    //Apparently no native way for JS to toggle arrows. Can change num but not true value. Keep looking 
  })



  //End setup func
});
