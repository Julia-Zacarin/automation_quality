Feature: Tarefa 03 do desafio de Automação

    Scenario: new user sign up
        Given I access the home page
        When I access the login page
        And I type a valid name and e-mail address and click on signup
        And I am redirected to the signup page
        And I fill in all the input fields with valid data
        And I click on Create Account
        Then the data is registered 

    #Scenario: registro de novo usuário
        #Dado que eu acesso a home page
        #Quando acesso a página de login
        #E digito um nome e um e-mail válidos e clico em signup
        #E sou redirecionada para a página de cadastro
        #E Preencho todos os campos de entrada com dados válidos
        #E clico em Create Account
        #Então os dados são registrados