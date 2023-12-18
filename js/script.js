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

// Zugriff auf Elemente
var meinKurzfilm = document.getElementById('meinKurzfilm');
var videoOverlay = document.getElementById('video-overlay');
var videoWrapper = document.getElementsByClassName('video-wrapper')[0];
var videoControls = document.getElementsByClassName('video-controls')[0];
var progressBar = document.getElementById('progress-bar');

// Zustandsvariable, um zu prüfen, ob die Maus über dem Video ist
var isMouseOverVideo = false;

// Event-Listener für das Video
meinKurzfilm.addEventListener('click', togglePlayPause);
meinKurzfilm.addEventListener('play', onPlay);
meinKurzfilm.addEventListener('pause', onPause);
meinKurzfilm.addEventListener('timeupdate', updateProgressBar);

// Event-Listener für die Kontrollleiste
videoWrapper.addEventListener('mouseenter', function() {
    isMouseOverVideo = true;
    showControls();
});
videoWrapper.addEventListener('mouseleave', function() {
    isMouseOverVideo = false;
    hideControls();
});

// Event-Listener für den Vollbild-Button und ProgressBar
document.getElementById('fullscreen-btn').addEventListener('click', toggleFullScreen);
progressBar.parentNode.addEventListener('click', seekVideo);

// Initialisieren beim Laden der Seite
window.onload = function() {
    showPlayIcon();
    hideControls();
};

function togglePlayPause() {
    if (meinKurzfilm.paused) {
        meinKurzfilm.play();
    } else {
        meinKurzfilm.pause();
    }
}

function onPlay() {
    videoOverlay.style.display = 'none';
    if (!isMouseOverVideo) hideControls();
}

function onPause() {
    showPlayIcon();
    if (isMouseOverVideo) showControls();
}

function showPlayIcon() {
    videoOverlay.textContent = '▶'; // Play-Symbol
    videoOverlay.style.display = 'block';
}

function updateProgressBar() {
    var percentage = (meinKurzfilm.currentTime / meinKurzfilm.duration) * 100;
    progressBar.style.width = percentage + '%';
}

function toggleFullScreen() {
    // Vollbild-Logik hier...
}

function seekVideo(e) {
    var width = this.offsetWidth;
    var rect = this.getBoundingClientRect();
    var pos = (e.clientX - rect.left) / width;
    pos = Math.max(0, Math.min(1, pos));
    meinKurzfilm.currentTime = pos * meinKurzfilm.duration;
}

function showControls() {
    videoControls.style.opacity = '1';
    videoControls.style.visibility = 'visible';
}

function hideControls() {
    videoControls.style.opacity = '0';
    videoControls.style.visibility = 'hidden';
}



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

