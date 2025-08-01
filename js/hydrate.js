let hydrationLevel = 50; // Initial hydration level

const hydrationQuotes = [
  { quote: "Feeling refreshed like a mountain spring!", type: "positive" },
  { quote: "A bit soggy, but in a zen way.", type: "positive" },
  { quote: "Hydration level: puddle-perfect.", type: "positive" },
  { quote: "Rock has seen better drops.", type: "neutral" },
  { quote: "Moist but modest.", type: "neutral" },
  { quote: "Still crunchy... but surviving.", type: "neutral" },
  { quote: "Rock cries for rain.", type: "dehydrated" },
  { quote: "Dry as a desert drama.", type: "dehydrated" },
  { quote: "Somewhere between drought and despair.", type: "dehydrated" },
];

function waterRock() {
  const quoteObj = hydrationQuotes[Math.floor(Math.random() * hydrationQuotes.length)];
  const quote = quoteObj.quote;
  const type = quoteObj.type;

  // Adjust hydration level based on quote type
  if (type === "positive") {
    hydrationLevel = Math.min(100, hydrationLevel + Math.floor(Math.random() * 10 + 5)); // +5 to +14
  } else if (type === "neutral") {
    hydrationLevel += Math.floor(Math.random() * 3) - 1; // -1 to +1
  } else if (type === "dehydrated") {
    hydrationLevel = Math.max(0, hydrationLevel - Math.floor(Math.random() * 10 + 5)); // -5 to -14
  }

  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  const dateStr = now.toLocaleDateString();

  document.getElementById("hydrationLevel").textContent = `Hydration Level: 💧 ${hydrationLevel}%`;
  document.getElementById("lastWatered").textContent = `Last Watered: ${timeStr} on ${dateStr}`;
  document.getElementById("hydrationQuote").textContent = `"${quote}"`;
}
