const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove('show');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('show');
}

setInterval(showNextSlide, 5000); // Change image every 5 seconds

// Initialize with the first slide visible
slides[currentIndex].classList.add('show');