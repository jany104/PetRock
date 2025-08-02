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

let isPhotoUploaded = false;

function triggerPhotoUpload() {
  document.getElementById('photoInput').click();
}

function handlePhotoUpload() {
  const input = document.getElementById('photoInput');
  if (input.files.length > 0) {
    isPhotoUploaded = true;
    const msgBox = document.getElementById('uploadMessage');
    msgBox.textContent = "✅ Photo uploaded! You can now access the features.";
    msgBox.style.color = "green";
  }
}

function checkUpload() {
  if (!isPhotoUploaded) {
    const msgBox = document.getElementById('uploadMessage');
    msgBox.textContent = "⚠️ Please upload your pet rock first!";
    msgBox.style.color = "red";
    return false; // prevent redirection
  }
  return true; // allow redirection
}




