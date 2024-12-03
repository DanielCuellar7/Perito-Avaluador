// alert("Ay mi madre el bichooooo")


/* Variables*/
const carrusel = document.querySelector('.carrusel-images');
const target = document.querySelector('.carrusel-img:last-child');
let interval = null;
let step = 1;


//Event listeners
addEventListeners();

function addEventListeners() {
    document.addEventListener('DOMContentLoaded', carruselStart);
}

//functions carrusel
function carruselStart() {

    interval = setInterval(function() {
        carrusel.scrollLeft += step;
        
    }, 10);
    carruselRepeat();
}

function carruselRepeat() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }

    observerImg(callback, options, target);

}

function observerImg(callback, options, target) {
    let observer = new IntersectionObserver(callback, options);
    observer.observe(target);
}

function callback(entries, observer) {
    entries.forEach(entry => {
        if (target) {
            carrusel.scrollLeft = 0;
        }

    });
}