function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class","bola");

    var r = Math.floor(Math.random()*255); 
    var g = Math.floor(Math.random()*255); 
    var b = Math.floor(Math.random()*255); 

    var p1 = Math.floor(Math.random()*500);
    var p2 = Math.floor(Math.random()*500);
    bola.setAttribute("style","left:"+p1+"px;top:"+p2+"px;background-color:rgb("+r+","+g+","+b);
    bola.setAttribute("onclick","estourar(this)");
    // bola.setAttribute("style","background-color:rgb("+r+","+g+","+b);

    document.body.appendChild(bola);
}

function estourar(elemento){
    document.body.removeChild(elemento);

    var numero = parseInt(document.getElementById("numero").innerHTML);

    numero = numero + 1;
    document.getElementById("numero").innerHTML = numero;
}

function iniciar(){
    setInterval(addBola, 1000);
}

function somar(){
    var numero = parseInt(document.getElementById("numero").innerHTML);

    numero = numero + 1;

    // console.log(numero);
    document.getElementById("numero").innerHTML = numero;
}