// Titelbild + Canvas

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
  
      ctx.font = '330px Outfit';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
  
      const text1 = 'Ein Stück';
      const text2 = 'Leben';
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
  
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillText(text1, centerX, centerY - 135);
      ctx.fillText(text2, centerX, centerY + 135);
  
      requestAnimationFrame(draw);
    }
  
    // TEAM BILD HOVER
    const teamImage = document.getElementById('teamImage');
    if (teamImage) {
      teamImage.addEventListener('mouseenter', () => {
        teamImage.src = 'img/Team/lustig.webp';
      });
  
      teamImage.addEventListener('mouseleave', () => {
        teamImage.src = 'img/Team/team.webp';
      });
    }
  
    // KARUSSELL
  
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slides img');
    const prevBtn = document.querySelector('.carousel .prev');
    const nextBtn = document.querySelector('.carousel .next');
  
    function showSlides(n) {
      if (!slides.length) return;
      if (n >= slides.length) slideIndex = 0;
      if (n < 0) slideIndex = slides.length - 1;
  
      slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'block' : 'none';
      });
    }
  
    function moveSlide(n) {
      slideIndex += n;
      showSlides(slideIndex);
    }
  
    // Nur EventListener verwenden (kein onclick im HTML nötig)
    if (prevBtn) prevBtn.addEventListener('click', () => moveSlide(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => moveSlide(1));
  
    showSlides(slideIndex);
  });
  