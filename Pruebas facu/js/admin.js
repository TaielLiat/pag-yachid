console.log("dentro");

const url2 = 'json/usuarios.json';
const request2 = new XMLHttpRequest();
request2.open('GET', url2, true);
request2.send();

request2.onload = function() {
    let datos = JSON.parse(this.responseText);
    let nombre = datos[0].user;
    document.getElementById("nombre").innerHTML = nombre;
    console.log('nombre: ' + datos);
    //console.log(nombre[0].user);
}

//console.log(request.response);