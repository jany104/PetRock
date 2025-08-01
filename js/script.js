document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  // Auto-slide every 2 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 2000); // 2000ms = 2 seconds

  updateCarousel();
});

function triggerUpload() {
  document.getElementById("fileInput").click();
}

// Optional: to store whether user uploaded (for future features)
let isPhotoUploaded = false;

document.getElementById("fileInput").addEventListener("change", function () {
  if (this.files.length > 0) {
    isPhotoUploaded = true;
    alert("Photo uploaded successfully! ✅");
    // You can call other unlocking functions here
  }
});
