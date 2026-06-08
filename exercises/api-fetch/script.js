// ============================================================
// EXERCISE: Fetching data from an API
// ============================================================
//
// GOAL
// ----
// Build a book search using the Open Library API.
// When the user searches for a title, display the results
// (book title + author) as a list on the page.
//
// API endpoint:
// https://openlibrary.org/search.json?q=YOUR_SEARCH_TERM
// e.g.: https://openlibrary.org/search.json?q=the+lord+of+the+rings
//
// Try it in your browser first to see what the response looks like.
// The data you need is inside: response.docs[]
// Each book has: .title and .author_name[]
//
//
// ============================================================

console.log("script loaded");

// ============================================================
// EXERCISE: Fetching data from an API
// ============================================================
//
// GOAL
// ----
// Build a book search using the Open Library API.
// When the user searches for a title, display the results
// (book title + author) as a list on the page.
//
// API endpoint:
// https://openlibrary.org/search.json?q=YOUR_SEARCH_TERM
// e.g.: https://openlibrary.org/search.json?q=the+lord+of+the+rings
//
// Try it in your browser first to see what the response looks like.
// The data you need is inside: response.docs[]
// Each book has: .title and .author_name[]
//
//
// ============================================================

console.log("script loaded");

const input = document.querySelector("#search-input");
const button = document.querySelector("#search-btn");
const resultsList = document.querySelector("#results");

button.addEventListener("click", async () => {
  const searchTerm = input.value.trim();
  if (!searchTerm) return;

  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`;

  resultsList.innerHTML = "<li>Loading…</li>";

  try {
    const response = await fetch(url);
    const data = await response.json();
    const books = data.docs;

    resultsList.innerHTML = "";

    if (books.length === 0) {
      resultsList.innerHTML = "<li>No results found.</li>";
      return;
    }



    for(let i = 0; i < books.length; i++) {
      const book = books[i];
      const title = book.title;
      const authors = book.author_name ? book.author_name.join(", ") : "Unknown author";
      const li = document.createElement("li");
      li.textContent = `${title} — ${authors}`;
      resultsList.appendChild(li);
    }

    const li = document.createElement("li");
    li.textContent = `${title} — ${authors}`;
    resultsList.appendChild(li);  
  } 
  
  catch (error) {
    resultsList.innerHTML = `<li>Something went wrong: ${error.message}</li>`;
    console.error(error);
  }
});