describe('My first e2e testing', function (params) {
    it('Check website codebreaker by John Galeano', function(){
        cy.visit('https://web-app-code-breaker.herokuapp.com')
        cy.pause()
        cy.contains('Code Breaker')
    })
    

    it('SET and GET number', function(){
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
})