const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  carousel.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

window.addEventListener("resize", () => showSlide(currentIndex));
