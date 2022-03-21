// const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// const arrayConcat = arrayOriginal.concat("André", "Fernanda")

// console.log(arrayOriginal)
// console.log(arrayConcat)

// const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

// console.log(arrayOriginal)
// console.log(arrayConcat)

const arrayOriginal = [50, 60, 70]

const arrayConcat = arrayOriginal.concat([80, [90, 100]]) // Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.

arrayConcat.push(90,100) //PARA ADICIONAR O 90, 100 DE FORMA CORRETA.

console.log(arrayConcat)
console.log(arrayOriginal)