let num = [5, 8, 2, 9, 3]

num.push(1) //acrescentar um número no final do vetor
num.sort() //coloca os números em ordem crescente

// console.log(num)

// console.log(`O vetor tem ${num.length} posições`)

// console.log(`A primeira posição do vetor é ${num[0]}`)


let pos = num.indexOf(8)//pesquisar se tem esse valor no vetor
if(pos == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor está na posição ${pos}`)
}