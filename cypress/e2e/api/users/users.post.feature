Feature: Users API - POST Endpoint
  As a QA engineer
  I want to test the POST user endpoint
  So that I can verify user creation functionality

  Scenario: Successfully create a new user
    Given I have test data loaded from fixtures
    When I send a POST request to create a new user with API key
    Then the response status should be 201
    And the response should contain the created user data
    And the user data should match the request payload

