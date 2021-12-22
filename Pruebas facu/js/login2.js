const request = new XMLHttpRequest();
request.open('GET', 'json/usuarios.json', true);
request.send();
let nombre_usuario = '',
    contra_usuario = '',
    nombre_admin = '',
    contra_admin = '';

request.onload = function() {
    let datos = JSON.parse(this.responseText);
    nombre_usuario = datos[1].user;
    contra_usuario = datos[1].password;
    nombre_admin = datos[0].user;
    contra_admin = datos[0].password;
    console.log(datos);
    console.log(datos);
}

function validar() {
    var usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("pass").value;

    if (usuario == nombre_usuario && Contraseña == contra_usuario) {
        window.location.href = `./index.html`;

    } else if (usuario == nombre_admin && Contraseña == contra_admin) {
        window.location.href = `./admin.html`;

    }

    if (Contraseña != contra_admin && usuario == nombre_admin) {
        alert("Contraseña incorrecta.");
    } else if (Contraseña == contra_admin && usuario != nombre_admin) {
        alert("Nombre de usuario incorrecto.");
    } else if (Contraseña != contra_usuario && usuario == nombre_usuario) {
        alert("Contraseña incorrecta.");
    } else if (Contraseña == contra_usuario && usuario != nombre_usuario) {
        alert("Nombre de usuario incorrecto.");
    } else {
        alert("Los datos son incorrectos.");
    }



}