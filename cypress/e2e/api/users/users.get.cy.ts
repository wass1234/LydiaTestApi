import { API_ENDPOINTS, HTTP_STATUS } from '../../../utils/api-helpers';

describe('Users API - GET Endpoint', () => {
  beforeEach(() => {
    cy.fixture('users').as('usersData');
  });

  it('Should successfully fetch a single user (GET /api/users/{id})', () => {
    cy.get('@usersData').then((usersData: any) => {
      const userId = usersData.existingUserId;
      const expectedUser = usersData.expectedUser;
      const url = API_ENDPOINTS.USER_BY_ID(userId);

      cy.log(`Testing GET ${url}`);

      cy.apiRequest('GET', url).then((response) => {
        // Status code validation
        cy.validateJsonResponse(response, { status: HTTP_STATUS.OK });

        // Body structure validation
        expect(response.body).to.have.property('data').that.is.an('object');
        expect(response.body).to.have.property('support').that.is.an('object');

        // Validate user data
        const userData = response.body.data;
        expect(userData).to.have.property('id', expectedUser.id);
        expect(userData).to.have.property('email', expectedUser.email);
        expect(userData).to.have.property('first_name', expectedUser.first_name);
        expect(userData).to.have.property('last_name', expectedUser.last_name);
        expect(userData).to.have.property('avatar').that.is.a('string');

        // Validate support object
        expect(response.body.support).to.have.property('url').that.is.a('string');
        expect(response.body.support).to.have.property('text').that.is.a('string');
      });
    });
  });
});

