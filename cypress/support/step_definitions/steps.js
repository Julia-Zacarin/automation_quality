import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

//Weekly: Quality Assurance (Automação - 13/04/2023)

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

//---------------------------------------------------------------------------------------------------------
// Weekly: Quality Assurance (Automação - 20/04/2023)

//Given("i access the form page", () => {
   //passo a passo
   //cy.visit("https://demo.automationtesting.in/Register.html")
//})

//Given("i access the home page", () => {
    //passo a passo
    //cy.visit("https://loja.electrolux.com.br/")
//})

Given("i access the home page", () => {
    //passo a passo
    cy.visit("https://secure.smrholding.com/api/io/login?returnUrl=%2Fapi%2Fio%2Faccount")
 })

 // Funções:
 // type -> serve para digitar
 // click -> serve para clicar em componentes clicáveis

 When("i fill all input fields", () => {
    //passo a passo sobre o Seletor (ele identifica o componente dentro da página)
    //(inspecionando usando o DevTools no Google)
    cy.get('[placeholder="E-mail"]').type("julia.zacarin@acct.global")
    //(inspecionando usando o Playground no Cypress)
    cy.get('.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type("@Acct123")
    cy.get('.vtex-login-2-x-sendButton > .vtex-button > .vtex-button__label').click()
    //observação: usuário não cadastrado, por isso não deve logar
 })

//---------------------------------------------------------------------------------------------------------
// Feature: Tarefa 02 do desafio de Automação
//(inspecionando usando o Playground no Cypress)

Given("I access the home page", () => {
    cy.visit("https://automationexercise.com/")
})

When("I access the login page", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
 })

And("I enter incorrect user name and password and click on submit", () => {
    cy.get('[data-qa="login-email"]').type("email@gmail.com")
    cy.get('[data-qa="login-password"]').type("@senha123")
    cy.get('[data-qa="login-button"]').click()
 })

Then("an error message should be displayed", () => {
    cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!')
})