function gerarTabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if(num.value.lenght == 0){
        window.alert('Por favor, digite um número!')
    } else{
        let n = Number(num.value)//para pegar o número
        let c = 0

        tab.innerHTML = '' //para limpar a tabuada antes de mostrar
        
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            //item.innerHTML = `tab${c}`
            tab.appendChild(item)//adiciona um elemento filho
            c++
        }
    }
}