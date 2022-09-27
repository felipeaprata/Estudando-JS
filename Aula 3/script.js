function addIngrediente(){
    var ingre = document.getElementById("ingrediente").value;

    var listaHtml = document.getElementById("lista").innerHTML;

    listaHtml = listaHtml+"<li>"+ingre+"</li>";
    document.getElementById("lista").innerHTML = listaHtml;
}