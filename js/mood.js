function analyzeMood() {
  const moods = [
    "😌 Content",
    "🤔 Contemplative",
    "😠 Slightly Agitated",
    "😴 Existentially Exhausted",
    "🙃 Emotionally Geode",
    "😳 Startled by a Feather",
    "😎 Igneous and Proud",
    "😢 Misses the other sedimentary kids",
    "🌀 Spiraling (in a zen way)"
  ];

  const jokes = [
    "This rock has deep thoughts… mostly about moss.",
    "Analyzed ancient rock DNA: results inconclusive but dramatic.",
    "Emotion detected: 93% dramatic, 7% gravel.",
    "Scan complete. Definitely has ~feelings~.",
    "This rock blinked... in spirit.",
    "Currently processing emotional pebbles.",
    "Feels oddly judged by the houseplant.",
    "Radiating wisdom. Or just absorbing sunlight.",
    "As stoic as ever, but in an artistic way."
  ];

  const moodIndex = Math.floor(Math.random() * moods.length);
  const jokeIndex = Math.floor(Math.random() * jokes.length);

  document.getElementById("moodText").textContent = moods[moodIndex];
  document.getElementById("jokeText").textContent = jokes[jokeIndex];
}
