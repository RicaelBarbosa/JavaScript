const salaJS = [7, 8, 9, 7, 5, 10, 5, 4, 10, 7]
const salaJava = [7, 8, 9, 7, 5, 10] 
const salaPython = [7, 8, 9, 7, 5]

function médiaSalas(notaDaSala){
    const somaDasNotas = notaDaSala.reduce((acum, atual) =>
    atual + acum, 0)
    return somaDasNotas/médiaSalas.length
}

console.log(`Média da sala de JS: ${médiaSalas(salaJS)}`)
console.log(`Média da sala de Java: ${médiaSalas(salaJava)}`)
console.log(`Média da sala de Python: ${médiaSalas(salaPython)}`)