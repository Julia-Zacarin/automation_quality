Feature: Weekly Automação 18/05/2023

Scenario: Login with incorrect username and password
    Given I access the home page
    When I access the login page
    And I submit incorrect username and password
    Then should display and error message


Scenario: Login with correct username and password
    Given I access the home page
    When I access the login page
    And I submit correct username and password
    Then should user logged