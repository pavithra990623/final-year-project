import cy from 'cypress'; // Import Cypress

describe('About Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/about'); // Update URL as needed
    });
  
    it('displays header and footer', () => {
      cy.get('header').should('exist');
      cy.get('footer').should('exist');
    });
  
    it('displays welcome message and mission statement', () => {
      cy.contains('Welcome to HealthConnect');
      cy.contains('Our Mission:');
      cy.contains('Our Goals');
      cy.contains('Meet Our Team');
    });
  
    it('checks if video play button exists', () => {
      cy.get('.play-btn').should('exist').and('have.attr', 'href', 'https://www.youtube.com/watch?v=VJ_s51QGbg8');
    });
  
    it('navigates to different sections on the page', () => {
      cy.contains('Our Mission:').click();
      cy.url().should('include', '#');
  
      cy.contains('Our Goals').click();
      cy.url().should('include', '#');
  
      cy.contains('Meet Our Team').click();
      cy.url().should('include', '#');
    });
  
    it('checks for icon boxes and descriptions', () => {
      cy.get('.icon-box').should('have.length', 3); // Assuming there are 3 icon boxes
      cy.contains('Our Mission:').next('.description').should('exist');
      cy.contains('Our Goals').next('.description').should('exist');
      cy.contains('Meet Our Team').next('.description').should('exist');
    });
  });
  