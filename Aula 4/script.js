function somar(){
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);
    var texto = document.getElementById("texto");

   texto = campo1 + campo2;

   document.getElementById("texto").innerHTML = texto;
}