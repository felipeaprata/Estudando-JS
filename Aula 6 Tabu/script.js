function calcTabuada(){
    var campo =parseInt(document.getElementById("campo").value);

    if(campo<=10 && campo>0){
        for(x=0;x<10;x++){
            var total = campo * x;
            document.write(campo+"*"+x+"="+total+"<br>");
        }
    }else{
        document.getElementById("mensg").innerHTML="Digite um numero de 1 a 10";
    }
}

function calcTabuada(){
    var numero = parseInt(document.getElementById("num").value);
    var mostrarTabuada = document.getElementById("resulTabuada");
    var tabuada='';

    for(x = 0; x <= 10;x++){
        tabuada +=
        '<tr>'+'<td>' + numero + '</td>' +
        '<td>x</td>'+
        '<td>'+ x + '</td>'+
        '<td>=</td>' +
        '<td>' + (numero*x) + '</td>' + '</tr>' + '<br>'
    }
    mostrarTabuada.innerHTML = tabuada;
}