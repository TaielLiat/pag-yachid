/* ==== NAVBAR ==== */


function headerNavbar() {
    let nav = '<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">';
    nav += '<div class="container-fluid">';
    nav += '<img class="navbar-brand" src="imagenes/Logo.png" height="60px" style="background-color: rgb(0, 230, 57); border-radius: 50px; padding: 2px;"> </img>';
    nav += '<div id="mySidebar" class="sidebar">';
    nav += '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>';
    nav += '<a href="./index.html" style="padding-left: 10px;color: #c7c7c7">Inicio</a>';
    nav += '<a href="#ofertas " style="padding-left: 10px;color: #c7c7c7 ">Ofertas</a>';
    nav += '<a href="#recomendados" style="padding-left: 10px;color: #c7c7c7">Recomendados</a>';
    nav += '<a href="./galeria.html" style="padding-left: 10px;color: #c7c7c7 ">Todos los juegos</a>';
    nav += '<ul class="list-unstyled ps-0">';
    nav += '<li class="mb-1">';
    nav += '<button style="color: #f1f1f1; font-size: 20px;" class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true"> Categorias </button>';
    nav += '<div class="collapse show" id="home-collapse">';
    nav += '<ul class="list-unstyled">';
    nav += '<li><a href="# " class="link-dark rounded ">Free to play</a></li>';
    nav += '<li><a href="#" class="link-dark rounded ">Acción</a></li>';
    nav += '<li><a href="# " class="link-dark rounded ">Aventuras</a></li>';
    nav += '<li><a href="# " class="link-dark rounded ">Carreras </a></li>';
    nav += '<li><a href="# " class="link-dark rounded ">Deportes</a></li>';
    nav += '<li><a href="# " class="link-dark rounded ">Estrategia</a></li>';
    nav += '<li><a href="# " class="link-dark rounded ">Multijugador masivo</a></li>';
    nav += '<li><a href="# " class="link-dark rounded ">Rol</a></li>';
    nav += '<li><a href="# " class="link-dark rounded ">Simuladores</a></li>';
    nav += '</ul>';
    nav += '</div>';
    nav += '</li>';
    nav += '<li class="mb-1"> <a href="contacto.html" style="padding-top: 6%; padding-left: 10px;color: #c7c7c7 ">Contacto</a> </li>';
    nav += '</ul>';
    nav += '</div>';
    nav += '<div id="main "> <button class="openbtn " onclick="openNav() ">☰ </button> </div>';
    nav += '<div class="collapse navbar-collapse " id="navbarCollapse ">';
    nav += '<ul class="navbar-nav  mb-2 mb-md-0 ">';
    nav += '<p class="titulo-yachid"> YACHID GAMING</p>';
    nav += '</ul>';
    nav += '</div>';
    nav += '</div>';
    nav += '</nav>';
    let header = document.getElementById("header_nav");
    // console.log(header);
    header.innerHTML = nav;
}
headerNavbar();



function footerNav() {
    let codigoFooter = '<footer class="pieDePagina ">';
    codigoFooter += '<div class="box_redes ">';
    codigoFooter += '<h3 class="titulo-redes-sociales ">SIGUENOS EN NUESTRAS REDES SOCIALES</h3>';
    codigoFooter += '<div class="redes sociales ">';
    codigoFooter += '<img style="margin-right: 8px; " src="imagenes/logo_facebook.png " height=40px>';
    codigoFooter += '<img src="imagenes/logo_insta.png " height=40px>';
    codigoFooter += '<img src="imagenes/logo_twitter.png " height=50px style="margin-bottom: -5px; ">';
    codigoFooter += '</div>';
    codigoFooter += '</div>';
    codigoFooter += '</footer>';
    let footer = document.getElementById("footer_nav");
    //console.log('hud.js FOOTER:' + footer);
    footer.innerHTML = codigoFooter;
}
footerNav();

function openNav() {
    document.getElementById("mySidebar").style.width = "340px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}