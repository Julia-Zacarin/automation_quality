import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import login from '../pages/login' // Está dizendo onde está os objetos e classes de login
import signup from '../pages/signup' // Está dizendo onde está os objetos e classes de signup
import loginParte3 from '../pages/loginParte3' // Está dizendo onde está os objetos e classes de loginParte3
import exSeletores from '../pages/exSeletores'

//Weekly: Quality Assurance (Automação - 13/04/2023)
// Feature: googleSearch

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

//---------------------------------------------------------------------------------------------------------
// Weekly: Quality Assurance (Automação - 20/04/2023)
// Feature: aula02

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
// Tarefa 02 do desafio de Automação (20/04/2023)
// Feature: login
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

//---------------------------------------------------------------------------------------------------------
// Weekly: Quality Assurance (Automação - 20/04/2023)
// Feature: loginParte2

Given("I access the homepages", () => { //Coloquei homepages para não dar erro em outra função
    cy.visit("https://automationexercise.com/")
})

//var iconeLogin = '.shop-menu > .nav > :nth-child(4) > a' //Para acessar página
var emailInput = '[data-qa="login-email"]' //Para input de email
var passwordInput = '[data-qa="login-password"]' //Para input de senha

//function clickLoginBtn() {
    //cy.get(iconeLogin).click({force:true}) //Force true: força o comportamento de algumas ações do Cypress
//}

When("I type wrong user and password", () => {
    login.clickLoginBtn()
    cy.get(emailInput).type('email@gmail.com')
    cy.get(passwordInput).type('@senha123{enter}') // enter: Como se pressionasse a tecla enter do computador
 })

 Then("it must show a message error", () => {
    cy.wait(500) // wait: aguarda a conclusão de uma operação assíncrona antes de prosseguir com o teste
    cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!')
})

When("I type the right user and wrong password", () => {
    login.clickLoginBtn()
    cy.get(emailInput).type('julia.zacarin@acct.global')
    cy.get(passwordInput).type('senhaerrada{enter}') // enter: Como se pressionasse a tecla enter do computador
 })

 When("I type the right user and password", () => {
    login.clickLoginBtn()
    cy.get(emailInput).type('julia.zacarin@acct.global')
    cy.get(passwordInput).type('@Mudarsenha123{enter}') // enter: Como se pressionasse a tecla enter do computador
 })

 Then("it log in", () => {
    cy.wait(500)
})

//---------------------------------------------------------------------------------------------------------
// Tarefa 03 do desafio de Automação (27/04/2023)
// Feature: signup

Given("I access the home page", () => {
    //cy.visit("https://automationexercise.com/")
    signup.accessHome()
})

When("I access the login page", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
 })

 And("I type a valid name and e-mail address and click on signup", () => {
    signup.signupForms() //Preencher formulário do Signup
    signup.clickSignupBtn() //Clicar no botão Signup
 })

 //Weekly 05/11/2023 - Revisão de Conteúdo (Melhorias após essa aula)
 //Mensagem de quando está na página de cadastro (signup) do cenário "I am redirected to the signup page"
 And("I am redirected to the signup page", () => {
    //cy.get('.clearfix > :nth-child(1)').should('contain', 'Title') // Antes validava se página contém a palavra Title
    signup.pageSignup()
})

When("I fill in all the input fields with valid data", () => {
    signup.formFilling()
})

And("I click on Create Account", () => {
    signup.clickCreateAccountBtn()
})

//Then("the data is registered", () => {
    //cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Congratulations! Your new account has been successfully created!')
//})

//Weekly 05/11/2023 - Revisão de Conteúdo (Melhorias após essa aula)
//Mensagem de sucesso para o cenário "the data is registered"

Then("the data is registered", () => {
    signup.validateMsg() //Mensagem nova escolhida para validação "ACCOUNT CREATED"
    //Mensagem antiga validava "Congratulations! Your new account has been successfully created!"
})

//---------------------------------------------------------------------------------------------------------
// Estudos da Weekly Automação 18/05/2023 - Mentoria do Dionisio
// Feature: loginParte3

Given("I access the home page loginParte3", () => {
    loginParte3.accessSite()
})

When("I access the login page loginParte3", () => {
    loginParte3.clickLoginIcone()
})

And("I submit incorrect username and password", () => {
    loginParte3.formLogin()
    loginParte3.clickLoginButton()
})

Then("should display and error message", () => {
    loginParte3.message()
})

And("I submit correct username and password", () => {
    loginParte3.formCorrectLogin()
    loginParte3.clickLoginButton()
})

Then("should user logged", () => {
    cy.wait(500)
    loginParte3.logged()
})

//---------------------------------------------------------------------------------------------------------
// Estudos da Weekly Automação 25/05/2023 - Aula 07 - Seletores
// Feature: aula07Seletores

Given("I access the page", () => {
    cy.visit("https://automationexercise.com/")
    cy.get("#header") //Exemplo ID -> usa #
    cy.get(".product-image-wrapper") //Exemplo Classe -> usa .
    cy.get(".header-middle") //Exemplo Classe -> usa .
    cy.get('[src="/get_product_picture/1"]') //Exemplo atributo HTML -> usa '[]'
    // cy.get("/html/body/section[2]/div/div/div[2]/div[1]/div[2]/div/div[1]/div[1]/img") //Exemplo XPATH - usa apenas ""
    cy.get('.productinfo>[src="/get_product_picture/1"]+h2') //Exemplo seletores combinados
})

//---------------------------------------------------------------------------------------------------------
// Tarefa 04 do desafio de Automação (25/05/2023)
// Feature: exSeletores

Given("I access the home page of the site", () => {
    exSeletores.accessHome()
})

When("I access the PDP", () => {
    exSeletores.clickProduct1tBtn()
})

Then("I observe the elements of the page", () => {
    exSeletores.seletoresProduct1()
})
