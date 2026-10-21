
const affirmations = [
  "You are doing better than you think. 💗",
  "Your feelings matter, and you deserve support.",
  "You don't have to be perfect to be enough.",
  "Small steps still count as progress. 🌱",
  "It's okay to rest and take care of yourself."
];

function showAffirmation() {
  const message = document.getElementById("affirmation");
  const randomIndex = Math.floor(Math.random() * affirmations.length);

  message.textContent = affirmations[randomIndex];
}

console.log("Welcome to Mindful Minds!");
