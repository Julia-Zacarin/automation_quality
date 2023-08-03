// Tarefa 04 do desafio de Automação (25/05/2023)
// Feature: exSeletores

// Classes (eram as funções)
/// <reference types="Cypress" />

// Abaixo, está puxando objeto em elements
const elExSeletores = require('./elements').ELEMENTS

// Abaixo é a função que antes estava em steps
class exSeletores{

    //Acessar a Home
    accessHome(){
        cy.visit("https://automationexercise.com/")
    }

    //Clicar no botão para acessar PDP
    clickProduct1tBtn() {
        cy.get(elExSeletores.product1Btn).click({force:true}) //Force true: força o comportamento de algumas ações do Cypress
    }

    //7 Seletores
    seletoresProduct1(){
        cy.get(elExSeletores.imageProduct1)
        cy.get(elExSeletores.qtyProduct1)
        cy.get(elExSeletores.addCartBtn)
        cy.get(elExSeletores.nameField)
        cy.get(elExSeletores.emailField)
        cy.get(elExSeletores.reviewField)
        cy.get(elExSeletores.submitBtn)
    }
    
}

export default new exSeletores() //essa função quer dizer que está exportanto uma instância dessa classe.
// Ou seja, exporta essas classes como um objeto para quando chamar essa classe em outra página, conseguimos usar ela/ manipular ela.
// O nome dela (signup) é a primeira palavra após Import na página de steps.
// Além disso, o nome dela também "chama" essas Classes (funções) de cada cenário na página de steps. 
// Exemplo: signup.validateMsg()