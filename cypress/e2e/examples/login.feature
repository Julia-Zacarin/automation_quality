Feature: Tarefa 02 do desafio de Automação

    Scenario: Filling the login fields with incorrect data
        Given I access the home page
        When I access the login page
        And I enter incorrect user name and password and click on submit
        Then an error message should be displayed

        #Scenario: Preencher os campos de login com dados incorretos
        #Dado que eu acesso a página inicial
        #Quando eu acesso a página de login
        #E eu digito usuário e senha incorretos e clico em enviar
        #Então uma mensagem de erro deve ser exibida