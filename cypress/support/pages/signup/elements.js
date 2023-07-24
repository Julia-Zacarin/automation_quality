// Elementos da página (eram as variáveis)

export const ELEMENTS = {

    //Preencher formulário do Signup
    nomeInput: '[data-qa="signup-name"]',
    emailInput: '[data-qa="signup-email"]',


    //Clicar no botão Signup
    iconeSignup: '[data-qa="signup-button"]',

    //Preencher formulário
    genderOption: '#id_gender2',
    password: '[data-qa="password"]',
    dayBirthday: '[data-qa="days"]',
    mounthBirthday: '[data-qa="months"]',
    yearBirthday: '[data-qa="years"]',
    newsletter: '#newsletter',
    specialOffer: '#optin',
    firtName: '[data-qa="first_name"]',
    lastName: '[data-qa="last_name"]',
    company: '[data-qa="company"]',
    address: '[data-qa="address"]',
    address2: '[data-qa="address2"]',
    country: '[data-qa="country"]',
    state: '[data-qa="state"]',
    city: '[data-qa="city"]',
    zipcode: '[data-qa="zipcode"]',
    number: '[data-qa="mobile_number"]',

    //Clicar no botão Create Account
    createAccount: '[data-qa="create-account"]',

    //Weekly 05/11/2023 - Revisão de Conteúdo (Melhorias após essa aula)
    //Mensagem de quando está na página de cadastro (signup) do cenário "I am redirected to the signup page"
    //msgSignup: '.clearfix > :nth-child(1)', //Validava mensagem antiga "Title"
    msgSignup: ':nth-child(1) > b', //Mensagem nova escolhida para validação "ENTER ACCOUNT INFORMATION"

    //Mensagem de sucesso para o cenário "the data is registered"
    //msgSuccess: '.col-sm-9 > :nth-child(2)' //Validava mensagem antiga "Congratulations! Your new account has been successfully created!"
    msgSuccess: 'b' //Mensagem nova escolhida para validação "ACCOUNT CREATED"

}