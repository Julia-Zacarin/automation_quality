// Aqui fica as classes (eras as funções)
/// <reference types="Cypress" />

// Abaixo, está puxando objeto em elements
const elLogin = require('./elements').ELEMENTS 

// Abaixo é a função que antes estava em steps
class login {
    clickLoginBtn() {
        cy.get(elLogin.iconeLogin).click({force:true}) //Force true: força o comportamento de algumas ações do Cypress
    }
}
export default new login()