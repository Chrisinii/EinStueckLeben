// Titelbild

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

video.addEventListener('loadeddata', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    requestAnimationFrame(draw);
});



function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "whitesmoke";
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Texteinstellungen
    ctx.font = '450px Outfit'; 
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 

    // Text zentrieren
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillText('Empathie', centerX, centerY);

    requestAnimationFrame(draw);
}

// Kurzfilm 

var meinKurzfilm = document.getElementById('meinKurzfilm');
var videoOverlay = document.getElementById('video-overlay');

// Initial anzeigen des Play-Symbols beim Laden der Seite
window.onload = function() {
    videoOverlay.textContent = '▶'; // Play-Symbol
    videoOverlay.style.display = 'block';
};

meinKurzfilm.addEventListener('click', function() {
    if (this.paused) {
        this.play();
        videoOverlay.textContent = '⏸'; // Pause-Symbol
        videoOverlay.style.display = 'block';
    } else {
        this.pause();
        videoOverlay.textContent = '▶'; // Play-Symbol
        videoOverlay.style.display = 'block';
    }
});

meinKurzfilm.addEventListener('play', function() {
    videoOverlay.style.display = 'none';
});

meinKurzfilm.addEventListener('pause', function() {
    videoOverlay.textContent = '▶'; // Play-Symbol
    videoOverlay.style.display = 'block';
});

// KARUSEL

let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slides")[0].getElementsByTagName("img");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

