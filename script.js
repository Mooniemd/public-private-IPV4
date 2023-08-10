let resposta = document.createElement("h1");
document.body.appendChild(resposta);

function Calculo(){
    let first = parseFloat(document.getElementById('first').value);
    let second = parseFloat(document.getElementById('second').value);
    let third = parseFloat(document.getElementById('fourth').value);
    let fourth = parseFloat(document.getElementById('fourth').value);
    let respostaFinal;
    let mascara = '';
    let endereco = '';
    if(first >=1 && first <=127){
        respostaFinal = "Classe: A"
        mascara = "Máscara: 255.0.0.0"
        if(first <= 10){
            endereco = "Endereço: Privado"
        } else (endereco = "Endereço: Público")
    }else if(first >= 128 && first <= 191 && second <= 255){
        respostaFinal = "Classe: B"
        mascara = " Máscara: 255.255.0.0"
        if (first = 172 && second >= 16 && second <= 31 && third >=0 && fourth >= 0){
            endereco = "Endereço: Privado"
        } else (endereco = "Endereço: Público")
    }else if(first >= 192 && first <= 223 && second <= 255 && third <= 255 && fourth <= 255){
        respostaFinal = "Classe: C"
        mascara = "Máscara: 255.255.255.0"
        if (first = 192 && second == 168 && third >= 0 && fourth >= 0){
            endereco = "Endereço: Privado"
        } else ( endereco = "Endereço Público")
    } else (respostaFinal = "IPV4 Inválido");
    resposta.innerHTML = respostaFinal + "\n" + mascara + "\n" + endereco;
}