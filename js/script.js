// Titelbild

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

video.addEventListener('loadeddata', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    requestAnimationFrame(draw);
});

// function checkCanvasWidth() {
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;

//     if (canvas.width <= 1015) {
//         canvas.style.display = 'none'; // Canvas ausblenden
//         video.style.display = 'none'; // Video ausblenden
//         document.querySelector('.title-page').style.display = 'block'; // Titelseite anzeigen
//     } else {
//         canvas.style.display = 'block'; // Canvas anzeigen
//         video.style.display = 'block'; // Video anzeigen
//         document.querySelector('.title-page').style.display = 'none'; // Titelseite ausblenden
//     }
// }

// // Event listener for the 'resize' event
// window.addEventListener('resize', checkCanvasWidth);

// // Initial check when the page loads
// checkCanvasWidth();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "whitesmoke";
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Texteinstellungen
    ctx.font = '350px Outfit'; // Reduziere die Schriftgröße
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Text auf zwei Zeilen aufteilen
    const text1 = 'Ein Stück';
    const text2 = 'Leben';

    // Text zentrieren
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    ctx.globalCompositeOperation = 'destination-out';

    // Zeichne den ersten Text auf der oberen Zeile
    ctx.fillText(text1, centerX, centerY - 150);

    // Zeichne den zweiten Text auf der unteren Zeile
    ctx.fillText(text2, centerX, centerY + 150);

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
// TODO: Video soll auch abgespielt werden, wenn man auf Playbutton oder um den Button klickt.
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
    if (!document.fullscreenElement) {
        if (meinKurzfilm.requestFullscreen) {
            meinKurzfilm.requestFullscreen();
        } else if (meinKurzfilm.mozRequestFullScreen) { /* Firefox */
            meinKurzfilm.mozRequestFullScreen();
        } else if (meinKurzfilm.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            meinKurzfilm.webkitRequestFullscreen();
        } else if (meinKurzfilm.msRequestFullscreen) { /* IE/Edge */
            meinKurzfilm.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }
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
    videoControls.style.pointerEvents = 'all'; /* Ermöglicht Klick-Events */
}

function hideControls() {
    videoControls.style.opacity = '0';
    videoControls.style.pointerEvents = 'none'; /* Verhindert Klick-Events */
}


// API BACHTEL-Test

async function fetchMovieData(title) {
    const response = await fetch(`http://bechdeltest.com/api/v1/getMoviesByTitle?title=${encodeURIComponent(title)}`);
    const data = await response.json();
    return data;
}

function checkBechdelTest() {
    const title = document.getElementById('movieTitle').value;
    fetchMovieData(title).then(movies => {
        if (movies.length > 0) {
            // Annahme: Wir nehmen das erste Suchergebnis
            const movie = movies[0];
            const resultText = movie.rating === '3' ? 'hat den Bechdel Test bestanden' : 'hat den Bechdel Test nicht bestanden';
            document.getElementById('result').innerText = `${movie.title} (${movie.year}) ${resultText}`;
        } else {
            document.getElementById('result').innerText = 'Film nicht gefunden.';
        }
    });
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