console.log('Cargando index.js');
const url = 'json/juegos.json';
const request = new XMLHttpRequest();
request.open('GET', url, true);
request.send();
let id_pagina = 0;

request.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        juegos = JSON.parse(this.responseText);
        document.getElementById("link").addEventListener("click", setPaginaActual) {
           
        }
    }
}

function setPaginaActual() {
    for (let datos of juegos) {
        if (datos.nombre == ){
            
        }
    }
}