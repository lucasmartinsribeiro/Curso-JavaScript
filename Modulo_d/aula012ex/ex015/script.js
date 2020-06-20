function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var tAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(tAno.value.length == 0 || Number(tAno.value) > anoAtual){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var sex = document.getElementsByName('radsex')
         // Calcal-se a idade depois do campo estar digitado corretamente.
        var idade = anoAtual - Number(tAno.value)
        var genero = ''
        // Criando imagem dinâmicamente
        var img = document.createElement('img')
        // Adicionando id para o elemento criado
        img.setAttribute('id', 'foto')

        if(sex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if(sex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' // para alinhar a resposta no centro
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}