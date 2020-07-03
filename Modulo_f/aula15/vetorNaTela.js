let valores = [8, 1, 7, 4, 2, 9]

// for(let pos = 0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} do vetor tem o valor: ${valores[pos]}`)
// }

//forma de se fazer dentro do javascript
//para cada posição dentre de valores
for(let pos in valores){
    console.log(`A posição ${pos} do vetor tem o valor: ${valores[pos]}`)
}