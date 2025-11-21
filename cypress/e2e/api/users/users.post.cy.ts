import { API_ENDPOINTS, HTTP_STATUS } from '../../../utils/api-helpers';
import { isValidISO8601 } from '../../../utils/api-helpers';

describe('Users API - POST Endpoint', () => {
  beforeEach(() => {
    cy.fixture('users').as('usersData');
  });

  it('Should successfully create a new user (POST /api/users)', () => {
    cy.get('@usersData').then((usersData: any) => {
      const newUser = usersData.validUser;
      const url = API_ENDPOINTS.USERS;

      cy.log(`Testing POST ${url} with payload: ${JSON.stringify(newUser)}`);

      // Use cy.request with API key header
      cy.request({
        method: 'POST',
        url: url,
        body: newUser,
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      }).then((response) => {
        // Status code validation
        expect(response.status).to.eq(HTTP_STATUS.CREATED);
        expect(response.headers['content-type']).to.include('application/json');

        // Body content validation
        const responseBody = response.body;

        // Check if the requested data is correctly reflected in the response
        expect(responseBody).to.have.property('name', newUser.name);
        expect(responseBody).to.have.property('job', newUser.job);

        // Check for system-generated fields
        expect(responseBody).to.have.property('id').that.is.a('string').and.not.empty;
        expect(responseBody).to.have.property('createdAt').that.is.a('string');
        
        
      });
    });
  });
});

