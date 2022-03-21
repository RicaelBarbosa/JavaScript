const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acumulado, individual) => acumulado + individual, 0)

console.log(soma) //170


const soma2 = numeros.reduce(function (acum, atual) {
    return atual + acum
   }, 0
)

function operacaoNumerica(acum, atual) {
    return atual + acum
   }
   
   const soma3 = numeros.reduce(operacaoNumerica, 0)

