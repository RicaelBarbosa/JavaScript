nome = ['Ana', 'Marcos', 'Maria', 'Mauro'] 
notas = [7, 4.5, 8, 7.5]

const reprovados = nome.filter((nome, indice) => notas[indice] < 5)
console.log(`Alunos reprovados: ${reprovados}`)