// function cumprimento() {
//     console.log('Oi gente')
// }
// 
// cumprimento()
// 
// function cumprimentaPessoa(pessoa){
//     console.log(`oi, ${pessoa}`)
// }
// 
// cumprimentaPessoa(`Ricael`)

// JUNÇÃO DE FUNCTIONS

// function cumprimentar(){
//     return 'Oi gente!'
//    }
//    
//    function cumprimentaPessoa(nomePessoa) {
//     console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
//    }
//    
// cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula” 

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}

operacaoMatematica()

function valorTotal(texto) {
    console.log(`${texto} ${operacaoMatematica(5,4,5)}` )
}

valorTotal("O resultado é de:")