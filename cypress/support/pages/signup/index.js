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
}
export default new signup()