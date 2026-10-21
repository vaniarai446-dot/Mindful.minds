
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


document.addEventListener("DOMContentLoaded", function () {
    const reminderButton = document.getElementById("affirmation-button");
    const reminderText = document.getElementById("affirmation-text");

    if (!reminderButton || !reminderText) return;

    const affirmations = [
        "I am allowed to grow at my own pace. ♡",
        "My feelings are valid, and I deserve kindness.",
        "I do not have to be perfect to be enough.",
        "Small steps are still progress.",
        "Rest is productive, too.",
        "I can ask for help when I need it.",
        "I deserve the same kindness I give others.",
        "Every day is a new opportunity to begin again.",
        "I am more than my achievements.",
        "It is okay to take things one step at a time. ♡"
    ];

    let previousIndex = -1;

    reminderButton.addEventListener("click", function () {
        let nextIndex;

        do {
            nextIndex = Math.floor(Math.random() * affirmations.length);
        } while (nextIndex === previousIndex);

        previousIndex = nextIndex;
        reminderText.textContent = affirmations[nextIndex];
    });
});


