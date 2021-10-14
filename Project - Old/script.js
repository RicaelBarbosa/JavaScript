function verificar() {
    var data = new Date () // para pegar a data atual
    var ano = data.getFullYear () // paga pegar o ano atual
    var fano = document.getElementById ('anodenascimento') // para pegar o valor inserido em (Ano de Nascimento)
    var res = document.getElementById ('resultado') // para pegar o resultado dos dados
    
    if (fano.value.length == 0 || fano.value > ano) { // Se o valor digitado em fano (Ano de nascimento for 0 ou for maior que o ano atual)
        window.alert ('ERRO - Verifique os dados e tente novamente.')
    }
    
    else {
        var fsex = document.getElementsByName ('bolinha') // Para pegar a opção "homem" ou "mulher"
        var idade = ano - Number(fano.value) // ano (ano atual) - valor inserido em fano (Ano de nascimento)
        var gênero = '' // '' Deixado em branco para poder escolher entre duas opções!
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) { // Se a idade estiver entre 0 e 10 anos
                img.setAttribute ('src', 'foto-bebe-m.png')
            }
            else if (idade < 20) {
                img.setAttribute ('src', 'foto-jovem-m.png')
            }           
            else if (idade < 50) {
                img.setAttribute ('src', 'foto-adulto-m.png')
            }
            else {
                img.setAttribute ('src', 'foto-idoso-m.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) { // Se a idade estiver entre 0 e 10 anos
                img.setAttribute ('src', 'foto-bebe-f.png')
            }
            else if (idade < 20) {
                img.setAttribute ('src', 'foto-jovem-f.png')
            }
            else if (idade < 50) {
                img.setAttribute ('src', 'foto-adulto-f.png')
            }
            else {
                img.setAttribute ('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

} 