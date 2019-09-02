describe('My first e2e testing', function (params) {
    it('Check website codebreaker by John Galeano', function(){
        cy.visit('https://web-app-code-breaker.herokuapp.com')
        cy.contains('Code Breaker')
    })
    

    it('All correspond in position and number', function(){
        cy.visit('https://web-app-code-breaker.herokuapp.com')
        cy.get('.setsecret')
        .type('1234')
        .should('have.value','1234')
        cy.get('.submit')
        .click()
        cy.contains('ok, let the game begins')

        cy.get('.setguess')
        .clear()
        .type('1234')
        .should('have.value','1234')
        cy.get('.submitGuess')
        .click()
        cy.contains('XXXX')   
})

it('Some correspond in position and number', function(){
    cy.visit('https://web-app-code-breaker.herokuapp.com')
    cy.get('.setsecret')
    .type('1234')
    .should('have.value','1234')
    cy.get('.submit')
    .click()
    cy.contains('ok, let the game begins')

    cy.get('.setguess')
    .clear()
    .type('1285')
    .should('have.value','1285')
    cy.get('.submitGuess')
    .click()
    cy.contains('XX')   
})

it('Some correspond in position and number', function(){
    cy.visit('https://web-app-code-breaker.herokuapp.com')
    cy.get('.setsecret')
    .type('1234')
    .should('have.value','1234')
    cy.get('.submit')
    .click()
    cy.contains('ok, let the game begins')

    cy.get('.setguess')
    .clear()
    .type('1245')
    .should('have.value','1245')
    cy.get('.submitGuess')
    .click()
    cy.contains('XX_')   
})

it('Some correspond in number, but not in position', function(){
    cy.visit('https://web-app-code-breaker.herokuapp.com')
    cy.get('.setsecret')
    .type('1234')
    .should('have.value','1234')
    cy.get('.submit')
    .click()
    cy.contains('ok, let the game begins')

    cy.get('.setguess')
    .clear()
    .type('4321')
    .should('have.value','4321')
    cy.get('.submitGuess')
    .click()
    cy.contains('____')   
})

})