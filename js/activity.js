function generateActivity() {
  const activities = [
    "🛏️ Take a 24-hour power nap.",
    "💨 Count how many times the fan spins.",
    "🎵 Listen to imaginary jazz music.",
    "🌕 Moon-gazing (even during the day).",
    "🧘 Practice stillness. You're a natural.",
    "🧼 Watch the soap bubble drama in the sink.",
    "🧃 Lounge near a juice box for ambiance.",
    "🪟 Stare at the wall and feel wise.",
    "🔮 Meditate on the meaning of pebbles.",
    "☕ Sit beside a warm mug and do nothing.",
    "📦 Hide in a box for secret rock business.",
    "🧃 Eavesdrop on the fridge humming.",
    "🌧️ Think about rain. That’s it. Just think.",
    "🧻 Observe the majestic toilet paper roll.",
    "🍌 Watch a banana ripen.",
    "💡 Bask in artificial lamp sunlight.",
    "📺 Watch imaginary TV (pretend it’s dramatic).",
    "🌿 Pretend to photosynthesize.",
    "📚 Hug a book and absorb knowledge.",
    "🐜 Mentally race the ants (no cheating)."
  ];

  const randomIndex = Math.floor(Math.random() * activities.length);
  document.getElementById("activityText").textContent = activities[randomIndex];
}

// Auto-run once on page load
generateActivity();
