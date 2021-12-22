/* ========== Envio de informacion ========== */
console.log('Cargando index.js');
const url = 'json/juegos.json';
const request = new XMLHttpRequest(); //inicio variable request e instancio el objeto
request.open('GET', url, true);
request.send(); // llamo / pido la informacion en request
let contador = 1;

request.onload = function() { //.onload espera la respuesta 
    if (this.readyState == 4 && this.status == 200) {
        info_juegos = JSON.parse(this.responseText);
        crearSlider();

    }

    /* ========== FINAL Envio de informacion ========== */

    function crearSlider() {

        let elementosSlider = '';
        let elementosRow = '';
        let elementosRecomendados = '<div class="row row-cols-1 row-cols-md-6 g-3 decoracion-carta item ">';
        for (let datos of info_juegos) {
            if (datos.productoDestacado == true) {
                //console.log(contador);
                elementosSlider += '<div class="mySlides ">';
                elementosSlider += '<div class="numbertext">' + contador + ' / 6</div>';
                elementosSlider += '<div class="contenedor" display: flex; ">';
                elementosSlider += ' <img class="mostrar" src="' + datos.imgPathH + '"> <video class="esconder" src="' + datos.videoPath + '" type="video/mp4" autoplay loop muted> </video>';
                elementosSlider += ' <div class=" datosSlider ">';
                elementosSlider += ' <p style="color: white; font-size: 1.5rem; "> ' + datos.nombre.toUpperCase() + ' </p>';
                elementosSlider += ' <p style="color: rgb(179, 179, 179); padding-right: -10%;"> ' + datos.descripciónSlider + '</p>';
                elementosSlider += ' <div class="label"><span> ' + datos.géneros[0] + ' </span><span> ' + datos.géneros[1] + '</span><span> ' + datos.géneros[2] + '</span> </div>';
                elementosSlider += ' <div style="margin-top: 35%; ">';
                elementosSlider += ' <div class="price" style="margin-top: 10%; "> ' + datos.precioDescuento + '<span> ' + datos.precioBase + '</span></div> <a href="../creacionjuego.html"><button class="botonJuego masDetalles " id="' + datos.id + '"> Más Detalles</div> </a>';
                elementosSlider += ' </div>';
                elementosSlider += ' </div>';
                elementosSlider += ' </div>';
                let div = document.getElementById("slider_ofertas");
                div.innerHTML = elementosSlider;
                console.log(datos.id);


                elementosRow += '<div class="column "> <img class="demo cursor imagenesSlider " src="' + datos.imgPathH + '" onclick="currentSlide(' + contador + ') "> </div>';
                let div2 = document.getElementById("slider_row");
                div2.innerHTML = elementosRow;
                contador++;
                //console.log('info juegos [i] ' + elementosSlider);
            }

            if (datos.productoRecomendado == true) {

                elementosRecomendados += '<div class="card h-100">';
                elementosRecomendados += '<img src="' + datos.imgPathV + '" class="card-img-top " alt="... " style="width: 100%; ">';
                elementosRecomendados += '<div class="item-content ">';
                elementosRecomendados += '<div class="precio-carta ">';
                elementosRecomendados += '<p class="nombre-carta">' + datos.nombre + '</p>';
                if (datos.descuento != false) {
                    elementosRecomendados += '<p class="descuento "> ' + datos.descuento + '</p>';
                    elementosRecomendados += '<p class="preciorebajado ">' + datos.precioDescuento + '</p>';
                }
                elementosRecomendados += '<p class="preciooriginal ">' + datos.precioBase + '</p>';
                elementosRecomendados += '<a href="../creacionjuego.html" class="btn"><button class="botonJuego masDetalles " id="' + datos.id + '"> Más detalles</button></a>';
                elementosRecomendados += '</a>';
                elementosRecomendados += '</div>';
                elementosRecomendados += '</div>';
                elementosRecomendados += '<p class="item-title">' + datos.nombre.toUpperCase() + '</p>';
                elementosRecomendados += '</div>';
                let rec = document.getElementById("recomendados");
                rec.innerHTML = elementosRecomendados;
            }
        }


    }




    /* ========== FINAL SLIDER ========== */

    /* ========== PAGINA ADMIN ========== */



    /* ========== FIN PAGINA ADMIN ========== */

    function setDataAdmin() {
        let tabla = document.querySelector('#tabla');
        tabla.innerHTML = '';
        for (let info of info_juegos) {
            tabla.innerHTML += `
    <tr>
        <td> ${info.id}</td>
        <td> ${info.nombre}</td>
        <td> ${info.géneros}</td>
        <td> ${info.precioBase}</td>
        <td> ${info.descuento}</td>
        <td> ${info.precioDescuento}</td>
    </tr>
    `
            console.log('tabla: ' + tabla);
        }


    }
}