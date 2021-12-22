console.log('Cargando index.js');
const url2 = 'json/juegos.json';
const request2 = new XMLHttpRequest();
request2.open('GET', url2, true);
request2.send();

request2.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            juegos = JSON.parse(this.responseText);
            let requisitosMinimos = '';
            let requisitosRecomendados = '';
            let reseñas = '';
            let informacion = '';
            let video = '';
            let imagen = '';
            var idJuego = document.getElementsByClassName("botonJuego").id;
            console.log(idJuego);
            for (let datos of juegos) {
                if (datos.id == idJuego) {

                    document.getElementById("nombre").innerHTML = datos.nombre;
                    document.getElementById("acerca").innerHTML = datos.descripción;
                    console.log('descripcion' + datos);
                    /* DIBUJO VIDEO CON VARIABLES */
                    video += '<section>';
                    video += '<video autoplay loop muted>';
                    video += '<source id="video" src="' + datos.videoPath + '"  type="video/mp4 ">';
                    video += '</video>';
                    video += '</section>';
                    let vid = document.getElementById("video");
                    vid.innerHTML = video;

                    /* DIBUJO IMAGEN  */
                    document.getElementById("imgV").innerHTML = imagen += '<img src="' + datos.imgPathV + '">';

                    /* DIBUJO INFORMACION DEL JUEGO */
                    informacion += '<p class="titulo-juego">' + datos.nombre + '</p>';
                    informacion += '<div class="datos-box">';
                    informacion += '<div>';
                    informacion += '<div class="datos"><b> TÍTULO: </b>' + datos.nombre + ' <br></div>';
                    informacion += '<div class="datos"><b> GÉNERO:</b>' + datos.géneros + '<br> </div>';
                    informacion += '<div class="datos"><b> DESARROLLADOR:</b> <a href="https://www.gearboxsoftware.com ">' + datos.desarrollador[0] + ' </div>';
                    informacion += '<div class="datos"> <b> EDITOR:</b> <a href="https://store.steampowered.com/publisher/2K "> ' + datos.editor + ' </a> </div>';
                    informacion += '<div class="datos"> <b> FRANQUICIA:</b> ' + datos.franquicia + '<br> </div>';
                    informacion += '<div class="datos"><b> FECHA DE LANZAMIENTO:</b> ' + datos.fechaDeLanzamiento + ' <br></div>';
                    informacion += '</div>';

                    let info = document.getElementById("informacion");
                    info.innerHTML = informacion;

                    /* DIBUJO RESE;AS, FALTA PONER LOS LINKS EN JSON Y LLAMARLOS ACA PERO NO ME DA EL TIEMPO */
                    reseñas += '<div class="reseñas">';
                    reseñas += '<div style="color: white; margin-top: 3%; ">';
                    reseñas += '<p style="font-size: 20px;font-family: sans-serif; "> RESEÑAS </p>';
                    reseñas += '<hr style="color: rgb(3, 3, 7); margin-right: 19%; margin-top: -1%; margin-bottom: 2%; ">';
                    reseñas += '</div>';
                    reseñas += '<div style="font-size: 18px; ; ;margin-right: 13%; color: rgb(165, 165, 165); font-family: sans-serif ">';
                    reseñas += '<div style="margin-bottom: 1.5%; ">';
                    reseñas += '' + datos.reseñas[0] + ' <a href=https://www.ign.com/articles/2012/09/14/borderlands-2-review> ' + datos.autores[0] + '</a></div><br>';
                    reseñas += '<div style="margin-bottom: 1.5%; ">';
                    reseñas += '' + datos.reseñas[1] + '<a href="http://pc.gamespy.com/pc/borderlands-2/1226112p1.html "> ' + datos.autores[1] + '</a></div> <br>';
                    reseñas += '<div style="margin-bottom: 1.5%; ">';
                    reseñas += '' + datos.reseñas[2] + ' <a href="https://www.pcgamer.com/borderlands-2-review/ "> ' + datos.autores[2] + '</a></div> <br>';
                    reseñas += '</div>';
                    reseñas += '</div>';

                    let resenias = document.getElementById("reseñas");
                    resenias.innerHTML = reseñas;

                    /* DIBUJO LOS REQUISITOS MINIMOS */
                    requisitosMinimos += '<strong>MÍNIMOS:</strong>';
                    requisitosMinimos += '<ul style="list-style: none; ">';
                    requisitosMinimos += '' + datos.requisitosSistemaMínimos.dato + '';
                    requisitosMinimos += '<li><strong>SO:</strong>' + datos.requisitosSistemaMínimos.SO + '<br> </li>';
                    requisitosMinimos += '<li><strong>Procesador:</strong> ' + datos.requisitosSistemaMínimos.Procesador + ' <br> </li>';
                    requisitosMinimos += '<li><strong>Almacenamiento:</strong> ' + datos.requisitosSistemaMínimos.Almacenamiento + '<br> </li>';
                    requisitosMinimos += '<li><strong>Memoria: </strong> ' + datos.requisitosSistemaMínimos.Memoria + '<br> </li>';
                    requisitosMinimos += '<li><strong>Gráficos:</strong> ' + datos.requisitosSistemaMínimos.Gráficos + '<br> </li>';
                    requisitosMinimos += '<li><strong>Tarjeta de sonido:</strong> ' + datos.requisitosSistemaMínimos.Tarjeta_Sonido + '<br> </li>';
                    requisitosMinimos += '</ul>';

                    let minimos = document.getElementById("req_minimos");
                    minimos.innerHTML = requisitosMinimos;

                    /* DIBUJO LOS REQUISITOS RECOMENDADOS */
                    requisitosRecomendados += '<strong>RECOMENDADOS:</strong>';
                    requisitosRecomendados += '<ul style="list-style: none; ">';
                    requisitosRecomendados += '' + datos.requisitosSistemaRecomendados.dato + '';
                    requisitosRecomendados += '<li><strong>SO:</strong>' + datos.requisitosSistemaRecomendados.SO + '<br> </li>';
                    requisitosRecomendados += '<li><strong>Procesador:</strong> ' + datos.requisitosSistemaRecomendados.Procesador + '<br> </li>';
                    requisitosRecomendados += '<li><strong>Almacenamiento:</strong> ' + datos.requisitosSistemaRecomendados.Almacenamiento + '<br> </li>';
                    requisitosRecomendados += '<li><strong>Memoria: </strong> ' + datos.requisitosSistemaRecomendados.Memoria + '<br> </li>';
                    requisitosRecomendados += '<li><strong>Gráficos:</strong> ' + datos.requisitosSistemaRecomendados.Gráficos + '<br> </li>';
                    requisitosRecomendados += '<li><strong>Tarjeta de sonido:</strong> ' + datos.requisitosSistemaRecomendados.Tarjeta_Sonido + '<br> </li>';
                    requisitosRecomendados += '</ul>';

                    let recomendados = document.getElementById("req_recomendados");
                    recomendados.innerHTML = requisitosRecomendados;
                } //if juego == id






            } //for datos
        } //if readystate
        /* CODIGO PARA CONFIRMAR ENVIO DE MENSAJE EN SECCION DE COMENTARIOS O BORRARLO CON CANCELAR */
        document.getElementById("boton").addEventListener("click", chequear);
        document.getElementById("cancelar").onclick = limpiar;

        function chequear() {
            alert("Comentario enviado correctamente.");
            document.getElementById("input").value = "";
        }

        function limpiar() {
            document.getElementById("input").value = "";
        }
    } //onload