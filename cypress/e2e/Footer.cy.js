import cy from 'cypress'; // Import Cypress

describe('Footer Component', () => {
    it('renders correctly', () => {
        cy.visit('/'); // Adjust the URL as needed

        // Check if the footer container exists
        cy.get('.Footer').should('exist');

        // Check if footer content is rendered correctly
        cy.contains('MedRecord KEEPER').should('exist');
        cy.contains('We are providing a space to store your all the medical records in one place.').should('exist');

        // Check if quick links are rendered correctly
        cy.contains('Quick Links').should('exist');
        cy.contains('About').should('exist');
        cy.contains('Home').should('exist');
        cy.contains('Lab').should('exist');
        cy.contains('Profile').should('exist');
        cy.contains('Register').should('exist');

        // Check if contact information is rendered correctly
        cy.contains('Contact Us With').should('exist');
        cy.contains('+94 11 345 678 9').should('exist');
        cy.contains('MedRecordKEEPER@gmail.com').should('exist');
        cy.contains('Departmant of Health, Sri Lanaka.').should('exist');

        // Check if the last-footer section exists
        cy.get('.Last-footer').should('exist');

        // Check if the copyright notice is correct
        cy.contains('Copyright © 2023-2024 MedRecordKEEPER. All rights reserved.').should('exist');
    });
});
