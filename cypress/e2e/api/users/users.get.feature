Feature: Users API - GET Endpoint
  As a QA engineer
  I want to test the GET user endpoint
  So that I can verify user data retrieval functionality

  Scenario: Successfully fetch a single user by ID
    Given I have test data loaded from fixtures
    When I send a GET request to fetch user with ID "2"
    Then the response status should be 200
    And the response should contain user data
    And the user data should match the expected values
    And the response should contain support information

