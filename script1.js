function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert(`[ERROR] Verifique os dados e tente novamente!`);
    } else{

        var sex = document.getElementsByName('radsex')
        var genero = ''
        var idade = (ano - Number(fano.value))

        
        if (sex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'images/menino.png')
            }else if (idade < 21){
                img.setAttribute('src', 'images/Madolescente.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'images/homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'images/idoso.png')
            }
        } else if (sex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'images/menina.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'images/Fadolescente.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'images/mulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'images/idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)

    }

}