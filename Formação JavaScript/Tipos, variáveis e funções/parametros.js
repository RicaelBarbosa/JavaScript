// parametros de função

function soma(num1, num2) {
    return num1 + num2
}

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

// console.log(nomeIdade(40, 'Ricael')) // se passar invertido, irá aparecer invertido!


// Função de mutiplicação
function mutiplicação(numero1 = 15, numero2 = 20) {
    return numero1 * numero2
}

console.log(mutiplicação(soma(4, 5)))





