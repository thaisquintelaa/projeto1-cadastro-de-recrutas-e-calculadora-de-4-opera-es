// Ex1

let primeiroNome = prompt('Digite seu primeiro nome:')
let sobrenome = prompt('Digite seu segundo nome')
let curso = prompt('Digite o curso que você faz?')
const anoNascimento = prompt('Digite o ano que você nasceu:')

let idade = 2024 - anoNascimento

alert(`
    Olá ${primeiroNome} ${sobrenome}
    Então você estuda ${curso} e tem ${idade} anos. Legal!
`)

// Ex2
let number1 = parseInt(prompt('Digite o primeiro número:'))
let number2 = parseInt(prompt('Digite o segundo número:'))

alert(`
    Resultado:
    ${number1} + ${number2} = ${number1 + number2}
    ${number1} - ${number2} = ${number1 - number2}
    ${number1} * ${number2} = ${number1 * number2}
    ${number1} / ${number2} = ${number1 / number2}    
    `)