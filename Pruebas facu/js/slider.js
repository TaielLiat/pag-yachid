console.log('cargando slider.js');
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides ");
    var dots = document.getElementsByClassName("demo ");
    var captionText = document.getElementById("caption ");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none ";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active ", " ");
    }
    slides[slideIndex - 1].style.display = "block ";
    dots[slideIndex - 1].className += " active ";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

/* ====== PAUSAR Y DESPAUSAR VIDEO AL TOCAR ========= 
const clip = document.querySelectorAll('.clip');
console.log('js video activado');
for (let i = 0; i < clip.length; i++) {
    clip[i].addEventListener('mouseenter',
        function(e) {
            clip[i].play();
        })
    clip[i].addEventListener('mouseout', function(e) {
        clip[i].pause();
    })
}
*/