Feature: Get all Sedes
  In order to initialice Sedes to the APP 
  As a Client with admin permissions
  I want to get all SEDES

  Scenario: A SEDES request from Client
    Given I send a GET request to "/sedes" 
  
    Then the response status code should be 201
    And the response should be  an object with the list of Sedes