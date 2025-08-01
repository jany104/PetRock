function generateMockTemperature() {
  const temp = (Math.random() * 25 + 10).toFixed(1); // 10°C to 35°C
  const display = document.getElementById("tempDisplay");
  const status = document.getElementById("tempStatus");
  const warning = document.getElementById("tempWarning");
  const quoteDisplay = document.getElementById("quoteDisplay");

  display.textContent = `${temp}°C`;

  if (temp < 20) {
    status.textContent = "🥶 Too chilly! Your rock demands warmth!";
    warning.style.display = "block";
  } else if (temp > 30) {
    status.textContent = "🥵 Dangerously toasty! Rock is uncomfortable.";
    warning.style.display = "block";
  } else {
    status.textContent = "😌 Ideal ambient temperature detected. Rock is zen.";
    warning.style.display = "none";
  }

  const quotes = [
    "🪨 'I used to be sedimentary, now I'm emotionally layered.'",
    "💨 'I feel a breeze... or maybe it's just existential dread.'",
    "🌡️ 'This isn't lava, it's just my hot takes.'",
    "🧘‍♂️ 'Temperature is temporary, but my chill is eternal.'",
    "🔥 'Geologically speaking, I’m melting right now.'",
    "❄️ 'Cold? Me? I’m rock solid.'",
    "📡 'Sensors calibrated. Rock detected high sass levels.'",
    "💤 'Ambient temp = nap zone initiated.'"
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
}

// Run once when the page loads
generateMockTemperature();
