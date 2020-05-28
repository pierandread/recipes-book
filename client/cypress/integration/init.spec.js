import {getRecipes} from '../../src/services/recepypuppyCall'

describe('Searching test', () => {
    it('input should have the value typed', () => {
    cy.visit('/')
      .get("input")
      .type("onions")
      .should("have.value", "onions")
  })
  it('should show no results if no recepies', () => {
    cy.visit('/')
      .get("input")
      .type("lionssssss")
      .type("{enter}")
    cy.contains("No results, try another search");
  })
  it('should show results if looking for a recepies', () => {
    cy.visit('/')
      .get("input")
      .type("milk")
      .type("{enter}")
    cy.contains("Ingredients");
  })
})