/* ========== Envio de informacion ========== */
console.log('Cargando index.js');
const url = 'json/juegos.json';
const request = new XMLHttpRequest(); //inicio variable request e instancio el objeto
request.open('GET', url, true);
//request.responseType = 'json';
request.send(); // llamo / pido la informacion en request
//var info_juegos = '';

request.onload = function() { //.onload espera la respuesta 
    if (this.readyState == 4 && this.status == 200) {
        //console.log('Pedido del if' + request.response);
        info_juegos = JSON.parse(this.responseText);
        console.log('Pedido del info_juegos' + info_juegos);
        let respuesta = document.querySelector('#respuesta');
        respuesta.innerHTML = '';

        for (let datos of info_juegos) {
            if (datos.descuento == false) {
                respuesta.innerHTML += `<div class="gallery__item mix ${datos.generos}">
                <a href="../creacionjuego.html" class="btn botonJuego">
                    <img src="${datos.imgPathH}" alt="Product">
                    <div class="gallery__item-content">
                        <p class="gallery__item-title" id="nombre">${datos.nombre}</p>
                        <p class="gallery__item-title">${datos.precioBase}</p> 
                    </div>
                </a>
            </div>
            `
            } else {
                respuesta.innerHTML += `
                <div class="gallery__item mix ${datos.generos}">
                    <a href="../creacionjuego.html" class="btn botonJuego">
                        <img src="${datos.imgPathH}" alt="Product">
                        <div class="gallery__item-content">
                            <p class="gallery__item-title" id="nombre">${datos.nombre}</p>
                            <p class="gallery__item-title">${datos.descuento} DESCUENTO -  ${datos.precioDescuento}</p> 
                        </div>
                    </a>
                </div>
        `

            }
        }
    }
}

/*===== Gallery =====*/
const galleryCategory = document.querySelectorAll('.gallery__category');
console.log('categorias:' + JSON.stringify(galleryCategory));

galleryCategory.forEach(category => category.addEventListener('click', linkActive));

function linkActive() {
    galleryCategory.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
}

/*===== Mixitup =====*/
var mixer = mixitup('.gallery__products');
/*


/* ========== FINAL Envio de informacion ========== */