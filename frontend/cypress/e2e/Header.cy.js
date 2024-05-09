import cy from 'cypress'; // Import Cypress
//cypress/integration/header.spec.js

describe('Header Component', () => {
    it('renders correctly', () => {
      // Visit the root URL where the Header component is rendered
      cy.visit('/'); // Adjust the URL as needed
  
      // Check if the header container exists
      cy.get('.header').should('exist');
  
      // Check if the logo is rendered correctly
      cy.get('img[alt="Logo"]').should('exist');
  
      // Check if navigation links are rendered correctly
      cy.contains('Home').should('exist');
      cy.contains('Login').should('exist');
      cy.contains('Register').should('exist');
      cy.contains('Profile').should('exist');
      cy.contains('About').should('exist');
      cy.contains('Lab').should('exist');
      cy.contains('Doctor').should('exist');
    });
  
    it('navigates to different pages when links are clicked', () => {
      // Visit the root URL where the Header component is rendered
      cy.visit('/'); // Adjust the URL as needed
  
      // Click on each link and verify the URL changes
      cy.contains('Home').click();
      cy.url().should('include', '/');
      
      cy.contains('Login').click();
      cy.url().should('include', '/Login');
      
      cy.contains('Register').click();
      cy.url().should('include', '/Register');
      
      cy.contains('Profile').click();
      cy.url().should('include', '/Profile');
      
      cy.contains('About').click();
      cy.url().should('include', '/About');
      
      cy.contains('Lab').click();
      cy.url().should('include', '/Lab');
      
      cy.contains('Doctor').click();
      cy.url().should('include', '/Doctor');
    });
});

