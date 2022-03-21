const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediaDosAlunos = [10, 7, 9, 6]

let ListaDeNotasEAlunos = [alunos, mediaDosAlunos]

 const exibeNomeNota = (nomeDoAluno) => { // Criando o Array
     if (ListaDeNotasEAlunos[0].includes(nomeDoAluno)){ // Irá receber ver se o nome está incluido.
        let indice = ListaDeNotasEAlunos[0].indexOf(nomeDoAluno) // Irá coletar o nome do aluno.
        return ListaDeNotasEAlunos[0][indice] + ', sua média é ' + ListaDeNotasEAlunos[1][indice] // irá retornar os nome e média

     } else {
         return 'Aluno não está cadastrado'
     }
 }

 console.log(exibeNomeNota('Juliana'))