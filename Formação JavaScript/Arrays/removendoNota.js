const notas = [10, 5.5, 7.45, 6.65, 8.8]
notas.pop() // COM O METODO POP NÃO PRECISA DE DECLARAÇÃO, ELE JÁ REMOVE A ÚLTIMA DECLARAÇÃO 8.8
let media = (notas[0] + notas[1] + notas[2] + notas[3] ) / notas.length

console.log(`A média é de ${media}`)