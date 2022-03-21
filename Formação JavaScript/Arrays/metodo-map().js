const nota = [10, 9, 8, 7, 6]
const notasAtualizadas = nota.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)