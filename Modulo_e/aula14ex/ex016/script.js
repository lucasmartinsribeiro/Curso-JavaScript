function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando: <br>'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        let c

        if(p <= 0){
            window.alert('Passo Inválido!')
            window.alert('Considerando o PASSO 1')
            p = 1
        }

        if(i < f){
            //Contagem crescente
            for(c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else{
            //Contagem regressiva
            for(c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}