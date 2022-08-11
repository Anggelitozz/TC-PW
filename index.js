const lista = document.getElementById("lista");

function add(){
    let texto = prompt("ingrese texto")
    var item = document.createElement("li")
    item.appendChild(document.createTextNode(texto))
    lista.appendChild(item)
}

