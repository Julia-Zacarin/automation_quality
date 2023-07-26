// Estudos da Weekly de Fixtures
// Feature: Weekly Automação 18/05/2023 - Mentoria do Dionisio

// Classes (funções)

/// <reference types="Cypress" />
import dataLogin from "../../../fixtures/dataLogin.json"

// Abaixo, está puxando objeto em elements
const elLoginParte3 = require('./elements').ELEMENTS

class loginParte3 {
    
    accessSite(){
        cy.visit("https://automationexercise.com/")
    }

    clickLoginIcone(){
        cy.get(elLoginParte3.loginIcone).click({force:true}) //Force true: força o comportamento de algumas ações do Cypress
    }

    formLogin(){
        cy.get(elLoginParte3.emailInput).type(dataLogin.IncorrectEmail)
        cy.get(elLoginParte3.passwordInput).type(dataLogin.IncorrectPassword)
    }

    formCorrectLogin(){
        cy.get(elLoginParte3.emailInput).type(dataLogin.CorrectEmail)
        cy.get(elLoginParte3.passwordInput).type(dataLogin.CorrectPassword)
    }

    clickLoginButton(){
        cy.get(elLoginParte3.loginBtn).click()
    }

    message(){
        //cy.get(elLoginParte3.messageFeedback).should('contain', 'Your email or password is incorrect!')
        cy.get(elLoginParte3.messageFeedback).should('have.text', 'Your email or password is incorrect!')
    }

    logged(){
        cy.get(elLoginParte3.messageLogged).should('contain', 'Logout')
    }

}

export default new loginParte3()