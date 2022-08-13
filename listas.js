var lista = document.querySelector("#nolista");

function agregar(){
    let entrada = document.querySelector("#entrada");
    lista.innerHTML+=`<li>${entrada.value.toLowerCase()}</li>`;
    entrada.value="";
}
function borrar(){
    lista.innerHTML=``;

}