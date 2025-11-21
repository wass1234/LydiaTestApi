/// <reference types="cypress" />

/**
 * Custom Cypress commands for API testing
 */

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to make API requests with common defaults
       * @example cy.apiRequest('GET', '/api/users/1')
       */
      apiRequest(method: string, url: string, body?: any, options?: Partial<Cypress.RequestOptions>): Chainable<Cypress.Response<any>>;
      
      /**
       * Custom command to validate JSON response structure
       * @example cy.validateJsonResponse(response, { status: 200 })
       */
      validateJsonResponse(response: Cypress.Response<any>, expectations: {
        status?: number;
      }): void;
    }
  }
}

/**
 * Custom API request command with defaults
 */
Cypress.Commands.add('apiRequest', (method: string, url: string, body?: any, options: Partial<Cypress.RequestOptions> = {}) => {
  return cy.request({
    method,
    url,
    body,
    failOnStatusCode: false,
    ...options
  });
});

/**
 * Custom command to validate JSON response
 */
Cypress.Commands.add('validateJsonResponse', (response: Cypress.Response<any>, expectations: {
  status?: number;
}) => {
  if (expectations.status !== undefined) {
    expect(response.status).to.eq(expectations.status);
  }
  
  // Default: expect JSON content type
  expect(response.headers['content-type']).to.include('application/json');
});

export {};

