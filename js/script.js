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
    ctx.font = '330px Outfit'; // Reduziere die Schriftgröße
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
    ctx.fillText(text1, centerX, centerY - 135);

    // Zeichne den zweiten Text auf der unteren Zeile
    ctx.fillText(text2, centerX, centerY + 135);

    requestAnimationFrame(draw);
}

// Kurzfilm 1

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
    showPlayIcon2();
    hideControls2();
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

// Kurzfilm 2

// Zugriff auf Elemente für das zweite Video
var meinKurzfilm2 = document.getElementById('meinKurzfilm2'); // Ändern Sie die ID entsprechend
var videoOverlay2 = document.getElementById('video-overlay2'); // Ändern Sie die ID entsprechend
var videoWrapper2 = document.querySelector('#kurzfilm2 .video-wrapper'); // Ändern Sie die ID entsprechend
var videoControls2 = document.querySelector('#kurzfilm2 .video-controls'); // Ändern Sie die ID entsprechend
var progressBar2 = document.getElementById('progress-bar2'); // Ändern Sie die ID entsprechend

// Zustandsvariable für das zweite Video
var isMouseOverVideo2 = false;

// Event-Listener für das zweite Video
meinKurzfilm2.addEventListener('click', togglePlayPause2); // Ändern Sie die ID entsprechend
meinKurzfilm2.addEventListener('play', onPlay2); // Ändern Sie die ID entsprechend
meinKurzfilm2.addEventListener('pause', onPause2); // Ändern Sie die ID entsprechend
meinKurzfilm2.addEventListener('timeupdate', updateProgressBar2); // Ändern Sie die ID entsprechend

// Event-Listener für die Kontrollleiste des zweiten Videos
videoWrapper2.addEventListener('mouseenter', function() {
    isMouseOverVideo2 = true;
    showControls2();
});
videoWrapper2.addEventListener('mouseleave', function() {
    isMouseOverVideo2 = false;
    hideControls2();
});

// Event-Listener für den Vollbild-Button und ProgressBar des zweiten Videos
document.getElementById('fullscreen-btn2').addEventListener('click', toggleFullScreen2); // Ändern Sie die ID entsprechend
progressBar2.parentNode.addEventListener('click', seekVideo2); // Ändern Sie die ID entsprechend

// Funktionen für das zweite Video

function togglePlayPause2() {
    if (meinKurzfilm2.paused) {
        meinKurzfilm2.play();
    } else {
        meinKurzfilm2.pause();
    }
}

function onPlay2() {
    videoOverlay2.style.display = 'none';
    if (!isMouseOverVideo2) hideControls2();
}

function onPause2() {
    showPlayIcon2();
    if (isMouseOverVideo2) showControls2();
}

function showPlayIcon2() {
    videoOverlay2.textContent = '▶'; // Play-Symbol
    videoOverlay2.style.display = 'block';
}

function updateProgressBar2() {
    var percentage = (meinKurzfilm2.currentTime / meinKurzfilm2.duration) * 100;
    progressBar2.style.width = percentage + '%';
}

function toggleFullScreen2() {
    if (!document.fullscreenElement) {
        if (meinKurzfilm2.requestFullscreen) {
            meinKurzfilm2.requestFullscreen();
        } else if (meinKurzfilm2.mozRequestFullScreen) { /* Firefox */
            meinKurzfilm2.mozRequestFullScreen();
        } else if (meinKurzfilm2.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            meinKurzfilm2.webkitRequestFullscreen();
        } else if (meinKurzfilm2.msRequestFullscreen) { /* IE/Edge */
            meinKurzfilm2.msRequestFullscreen();
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

function seekVideo2(e) {
    var width = this.offsetWidth;
    var rect = this.getBoundingClientRect();
    var pos = (e.clientX - rect.left) / width;
    pos = Math.max(0, Math.min(1, pos));
    meinKurzfilm2.currentTime = pos * meinKurzfilm2.duration;
}

function showControls2() {
    videoControls2.style.opacity = '1';
    videoControls2.style.pointerEvents = 'all'; /* Ermöglicht Klick-Events */
}

function hideControls2() {
    videoControls2.style.opacity = '0';
    videoControls2.style.pointerEvents = 'none'; /* Verhindert Klick-Events */
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

// TEAM BILD

document.addEventListener('DOMContentLoaded', function () {
    var teamImage = document.getElementById('teamImage');

    teamImage.addEventListener('mouseenter', function() {
        teamImage.src = 'img/Team/lustig.webp'; // Pfad zu Ihrem neuen Bild
    });

    teamImage.addEventListener('mouseleave', function() {
        teamImage.src = 'img/Team/team.webp'; // Pfad zurück zum ursprünglichen Bild
    });
});
