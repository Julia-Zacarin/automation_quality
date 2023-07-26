// Tarefa 03 do desafio de Automação (27/04/2023)
// Feature: signup

// Classes (eram as funções)
/// <reference types="Cypress" />

// Abaixo, está puxando objeto em elements
const elSignup = require('./elements').ELEMENTS

// Abaixo é a função que antes estava em steps
class signup {

    //Acessar a Home
    accessHome(){
        cy.visit("https://automationexercise.com/")
    }

    //Preencher formulário do Signup
    signupForms() {
        cy.get(elSignup.nomeInput).type('Julia')
        cy.get(elSignup.emailInput).type('emailteste32@gmail')
    }

    //Weekly 05/11/2023 - Revisão de Conteúdo (Melhorias após essa aula)
    //Mensagem de quando está na página de cadastro (signup) do cenário "I am redirected to the signup page"
    pageSignup(){
        cy.get(elSignup.msgSignup).should('be.visible') //be.visible: afirma que é visível
    }

    //Clicar no botão Signup
    clickSignupBtn() {
        cy.get(elSignup.iconeSignup).click({force:true}) //Force true: força o comportamento de algumas ações do Cypress
    }

    //Preencher formulário
    formFilling() {
       cy.get(elSignup.genderOption).check()
       cy.get(elSignup.password).type('senha1')
       cy.get(elSignup.dayBirthday).select('27')
       cy.get(elSignup.mounthBirthday).select('April')
       cy.get(elSignup.yearBirthday).type('2002')
       cy.get(elSignup.newsletter).check()
       cy.get(elSignup.specialOffer).check()
       cy.get(elSignup.firtName).type('Julia')
       cy.get(elSignup.lastName).type('Zacarin')
       cy.get(elSignup.company).type('Quality Digital')
       cy.get(elSignup.address).type('Teste')
       cy.get(elSignup.address2).type('Teste')
       cy.get(elSignup.country).select('India')
       cy.get(elSignup.state).type('Teste')
       cy.get(elSignup.city).type('Teste')
       cy.get(elSignup.zipcode).type('12345678')
       cy.get(elSignup.number).type('999999999')
    }

    //Clicar no botão Create Account
    clickCreateAccountBtn() {
    cy.get(elSignup.createAccount).click({force:true})
    }

    //Weekly 05/11/2023 - Revisão de Conteúdo (Melhorias após essa aula)
    //Mensagem de sucesso para o cenário "the data is registered"
    validateMsg(){
        cy.get(elSignup.msgSuccess).should('be.visible') //be.visible: afirma que é visível
    }
}
export default new signup() //essa função quer dizer que está exportanto uma instância dessa classe.
// Ou seja, exporta essas classes como um objeto para quando chamar essa classe em outra página, conseguimos usar ela/ manipular ela.
// O nome dela (signup) é a primeira palavra após Import na página de steps.
// Além disso, o nome dela também "chama" essas Classes (funções) de cada cenário na página de steps. 
// Exemplo: signup.validateMsg()