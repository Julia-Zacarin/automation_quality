// Tarefa 04 do desafio de Automação (25/05/2023)
// Feature: exSeletores

// Elementos da página (eram as variáveis)

export const ELEMENTS = {

    //Clicar no botão para acessar PDP
    product1Btn: '[href="/product_details/1"]',

    //7 Seletores
    imageProduct1: '[src="/get_product_picture/1"]', //Usando HTML
    qtyProduct1: '#quantity', //Usando ID
    //class="btn btn-default cart" -> onde tem espaço, usar ponto
    addCartBtn: '.btn.btn-default.cart', //Usando Classe CSS
    nameField: '#name', //Usando ID
    emailField: '#email', //Usando ID
    reviewField: '#review', //Usando ID
    submitBtn: '.btn.btn-default.pull-right' //Usando Classe CSS
    //submitBtn: '#button-review' //Usando ID

}