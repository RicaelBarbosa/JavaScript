const nomes = ['andré','jorge', 'matheus', 'ricael', 'jhonatan', 'pedro', 'paulo', 'maria', 'wesley', 'luiz']

console.log(`tamanho do array ${nomes.length}`)

                        //0    a    10
const sala1 = nomes.slice(0, nomes.length/2)
                        //10   a    20
const sala2 = nomes.slice(nomes.length/2)

console.log(sala1)
console.log(sala2)