let index = 0;

function cambiarImagen(n) {
    const slides = document.querySelectorAll(".slide");
    index += n;

    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    const newTransform = `translateX(${-index * 300}px)`;
    document.querySelector(".imagenes").style.transform = newTransform;
}
