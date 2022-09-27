function testarVeri(){
    var texto = document.getElementById("texto");
    var numero = prompt("Digite uma idade:");

    if(numero < 16){
        texto = "Não pode votar, pois sua idade é "+numero;
    }else{
        texto = "Já pode votar! Pq sua idade é: "+numero;
    }

    document.getElementById("texto").innerHTML = texto;
}