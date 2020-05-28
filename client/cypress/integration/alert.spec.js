describe('Search Error', () => {
  it('should be give an alert if less than 3 characters', () => {
  cy.visit('/')
    .get("input")
    .type("on")
    .type("{enter}")  
  
  cy.on('window:alert', (str) => {
      expect(str).to.equal(`Please insert more than 3 characters`)
    })
})
})