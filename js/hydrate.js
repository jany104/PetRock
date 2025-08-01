  // Randomly generate a hydration percentage between 30% and 95%
  const randomHydration = Math.floor(Math.random() * 66) + 30;
  const waterFill = document.querySelector(".water-fill");
  waterFill.style.width = randomHydration + "%";

  // Optional: update the note text based on the hydration level
  const note = document.querySelector(".note");
  if (randomHydration < 40) {
    note.textContent = "Warning: Rock is feeling a bit dry 😬";
    note.style.color = "#d32f2f";
  } else if (randomHydration < 60) {
    note.textContent = "Hydration okay, but could use a splash 💦";
    note.style.color = "#f57c00";
  } else {
    note.textContent = "Watered recently! Your rock is thriving 🌱";
    note.style.color = "#00796b";
  }

