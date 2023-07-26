Feature: Weekly Automação 18/05/2023 Mentoria do Dionisio
#Estudos da Weekly de Fixtures

#Coloquei page-loginParte3 para não dar erro nos steps por conta das outras features
#@focus -> serve para realizar apenas o cenário que tem o @focus acima dele
Scenario: Login with incorrect username and password
    Given I access the home page loginParte3
    When I access the login page loginParte3
    And I submit incorrect username and password
    Then should display and error message
    
Scenario: Login with correct username and password
    Given I access the home page loginParte3
    When I access the login page loginParte3
    And I submit correct username and password
    Then should user logged