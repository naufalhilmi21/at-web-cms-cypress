import { expect } from 'chai';

const username = 'ezpadmin@cariparkir.co.id';
const password = 'Astra2018';
const field = ['username', 'password'];

describe('Login CMS Admin --Positive Case', () => {
  it('Login with correct username and pasword then enter to login', () => {
    cy.visit('/#/login');
    cy.get('input[ng-model="crendetial.username"]')
      .type(username);
    cy.get('input[placeholder="Password"]')
      .type(`${password}{enter}`);
    // expect(cy.url()).to.include('/dashboard/user-consumer');
    cy.log('test');
  });

  it('Login with correct username and pasword then click login button to login', () => {
    cy.visit('/#/login');
    cy.get('input[ng-model="crendetial.username"]')
      .type(username);
    cy.get('input[placeholder="Password"]')
      .type(password);
    cy.contains('Login').click();
    cy.url().should('include', '/dashboard/user-consumer');
  });
});

describe('Login CMS Admin --Negative Case', () => {
  it('Login with empty username and pasword then click login button to login', () => {
    cy.visit('/#/login');
    cy.get('input[placeholder="Password"]')
      .type(password);
    cy.contains('Login').click();
    const url = cy.url();
    expect(url).to
  });

  it('Login with correct username and empty pasword then click login button to login', () => {
    cy.visit('/#/login');
    cy.get('input[ng-model="crendetial.username"]')
      .type('');
    cy.contains('Login').click();
    cy.url().should('include', '/dashboard/user-consumer');
  });

  it('Login with correct username and empty pasword then click login button to login', () => {
    cy.visit('/#/login');
    cy.contains('Login').click();
    cy.url().should('include', '/dashboard/user-consumer');
  });
});
