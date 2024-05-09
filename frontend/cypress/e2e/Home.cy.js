import cy from 'cypress'; // Import Cypress

describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Update URL as needed
    });
  
    it('displays header and footer', () => {
      cy.get('header').should('exist');
      cy.get('footer').should('exist');
    });
  
    it('displays welcome message and reasons to choose Medilab', () => {
      cy.contains('Welcome To MediLab');
      cy.contains('Why Choose Medilab?');
      cy.contains('Lab Report Management');
      cy.contains('Doctor-Patient Collaboration');
      cy.contains('Join the Revolution');
    });
  
    it('navigates to Learn More section', () => {
      cy.contains('Learn More').click();
      cy.url().should('include', '#'); // Update URL as needed
    });
  
    it('checks if user data is logged in', () => {
      // Assuming there's a logged-in user with username displayed
      cy.get('.username').should('exist'); // Update class as needed
    });
  
    it('checks for background images', () => {
      cy.get('.icon-img').eq(0).should('have.attr', 'src').should('include', 'slideim4.jpg');
      cy.get('.icon-img').eq(1).should('have.attr', 'src').should('include', 'slideim1.jpg');
      cy.get('.icon-img').eq(2).should('have.attr', 'src').should('include', 'imageone.png');
    });
  });
  