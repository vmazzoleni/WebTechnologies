console.log("Hello world!");

// ============================================================
// Last Visited Highlight
// ============================================================
// When you click a card, we save its href to localStorage.
// On the next visit to the hub, that card gets a "last visited"
// badge so you know where you left off.
// ============================================================

const STORAGE_KEY = "lastVisited";

// 1. On page load — check if we have a saved exercise
const lastVisited = localStorage.getItem(STORAGE_KEY);

if (lastVisited) {
  // Find the card whose href matches what we saved
  const lastCard = document.querySelector(`.ex-card[href="${lastVisited}"]`);

  if (lastCard) {
    // Add a CSS class so we can style it
    lastCard.classList.add("last-visited");

    // Inject a small badge into the card
    const badge = document.createElement("span");
    badge.classList.add("last-visited-badge");
    badge.textContent = "Last visited";
    lastCard.prepend(badge);
  }
}

// 2. On click — save the href of whichever card the user clicks
const cards = document.querySelectorAll(".ex-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEY, card.getAttribute("href"));
  });
});