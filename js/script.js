// Titelbild

document.addEventListener('DOMContentLoaded', () => {

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
    var teamImage = document.getElementById('teamImage');

    teamImage.addEventListener('mouseenter', function () {
        teamImage.src = 'img/Team/lustig.webp';
    });

    teamImage.addEventListener('mouseleave', function () {
        teamImage.src = 'img/Team/team.webp';
    });
});

