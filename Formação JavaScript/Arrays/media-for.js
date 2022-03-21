const contagem = [1, 2, 3, 5.6]

let numeros = 0

for (let i = 0; i < contagem.length; i++){
    numeros += contagem[i]
}

let soma = numeros/contagem.length

console.log(numeros)