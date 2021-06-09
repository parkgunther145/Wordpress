
describe('Test Wordpress My Profile testing', () => {
    
it('Wordpress login testing', () => {   
    cy.visit('https://wordpress.com/me');
    cy.get('#usernameOrEmail').type('parkgunther123')
    cy.get('.login__form-action > .button').click()
    cy.get('#password').type('Goodjob123$%', {force: true})
    cy.get('.login__form-action > .button').click()
});    
      
 it('Wordpress Profile testing', () => {
     cy.get('#first_name').type('park')
     cy.get('#last_name').type('gunther')
     cy.contains('parkgunther123').should('have.value', '')
     cy.get('#description').type('What a wonderful world')
     cy.get('#inspector-toggle-control-0').click() //testing Hide my Gravatar profile push to on
     cy.get('.profile__submit-button-wrapper > .button').click() //Save profile details

});

});
