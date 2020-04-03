// This is where we write out UI tests

// mocha syntax:
describe("UI tests for todo app", () => { // Test title that describes that this is a collection of tests for your app. 

    it("Visit starting page for app", () => { //If you want to try a page you can try examples.cypress.com
        cy.visit("http://localhost:8000/todo") 

        cy.contains("Things to-do").click(); // .contains() means to find text on the page 
        cy.get("input").type("blä {enter}");
        cy.get("input").type("blä2 {enter}");
        // cy.get("input").type("blä3 {enter}");
        // cy.url().should("include", "/todo"); 
    });

    // it("Should delete the todos", () => {
    //     cy.get(".close").click({multiple: true}); 
    // });

    it("Should sort the todos", () => {
        cy.get(".byABCD").click();
    });


    it("Should delete the todos", () => {
        cy.get(".close").each(() => {
        cy.get(".close").first().click();
    })
});
    // it("Should sort the todos", () => {
    //     cy.get(".byABCD").click();
    // });


    // it("Should add a todo", () => {
    //     cy.get
    // });
    

        // cy.get("#inputelement to add").type("the new todo").should("have.value", "the new todo");

        // cy.get('.Title').type('Things to-do').blur()
        // .should('have.class', 'error')
        // .prev().should('have.attr', 'style', 'color: red;')


        // cy.get(".action-blur").blur()
        // cy.get("input").type("hej").should("", ""); // get means get that specific element, type hej in the field

        // Check if link, button or anything you want to test, works.
        // If you have a link that is called "next" then that is fine.

        // We should click the link

        // Control if we get send to the right address.
});