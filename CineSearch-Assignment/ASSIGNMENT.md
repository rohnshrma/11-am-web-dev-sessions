# Assignment: Build the Brain of CineSearch 🎬

**Course:** WebiGeeks – MERN Stack Development (JavaScript Module)
**Topic:** DOM, Events, `fetch`, `async/await`, Working with a real REST API
**Time allowed:** 5–7 days (at your own pace, ~8–10 hours of work)
**Total marks:** 100

---

## 1. What you are given

You have received a starter folder with:

| File | Status |
|---|---|
| `index.html` | ✅ Complete – **do not change it** (except Bonus B3) |
| `styles.css` | ✅ Complete – **do not change it** |
| `favicon-32x32.png` | ✅ Complete |
| `script.js` | ❌ **Empty. This is your job.** |

The page already *looks* finished. Open `index.html` in a browser – you will see the search form, but nothing works. Your task is to write **every line of `script.js`** so the app works end to end.

> You will **not** be given a solution, a skeleton, or function names. Planning the structure is part of the assignment.

---

## 2. The Rules – 100% Your Own Work

This assignment checks whether **you** can think like a developer. Code you cannot explain earns zero, however well it works.

**Not allowed:**
- ChatGPT, Claude, Gemini, Copilot, Cursor, Codeium or any AI code tool – including AI autocomplete inside VS Code. **Switch it off before you start.**
- Copying code from GitHub, YouTube, blogs or a friend's project (including the original CineSearch repo).
- Asking someone else to write or "fix" your code.

**Allowed:**
- MDN Web Docs (developer.mozilla.org), the TMDB API documentation, your class notes.
- Asking your trainer *conceptual* questions ("How does `fetch` handle errors?"), not "write this for me".
- Searching an error message to understand it.

**How we check (so please don't risk it):**
1. **Viva:** a 10-minute live explanation. You will be asked to explain any line, and to make a small change live.
2. **Git history:** your work must be committed in small steps (see Section 7). One giant commit at the end = automatic –20 marks.
3. **Planning sheet:** your hand-written plan (Section 4) must be submitted and must match your code.

---

## 3. What the finished app must do

Read these carefully – they are your "client requirements".

### R1 – On page load
When the page opens, the app automatically shows a grid of **currently popular movies**.

### R2 – Search inputs
The user has three inputs: **Movie Name** (text), **Genre** (dropdown), **Release Year** (number). They can fill any combination, including none.

### R3 – Triggering a search
A search runs when the user:
- clicks the **Search Movies** button, or
- presses **Enter** in the Movie Name box or the Release Year box.

### R4 – Which data to fetch (the core logic)

| Movie Name | Genre / Year | What the app should show |
|---|---|---|
| filled | any | Movies whose **title matches** the name. If a year is given, only that year. If a genre is chosen, only movies of that genre. |
| empty | genre and/or year given | Movies of that genre and/or year, **most popular first**. |
| empty | both empty | **Popular movies** (same as R1). |

*Think:* the TMDB title-search endpoint does **not** accept a genre. How will you still respect the genre choice? (There is a field on each movie object that helps.)

### R5 – Loading state
While data is being fetched, the **loading spinner** is visible, and the results and "No movies found" sections are hidden.

### R6 – Showing results
- Hide the spinner; show the results section.
- Remove any old cards before adding new ones (a second search must **not** add to the first).
- Create **one card per movie**.
- Smoothly scroll the page down to the results.

### R7 – Each movie card must show
- Poster image (see "missing data" below)
- Title
- Release **year only** (e.g. `2019`, not `2019-04-24`)
- Short description (overview)
- Rating with **one decimal place** (e.g. `7.3`), next to a ⭐

### R8 – Missing data must not break the card
| If missing… | Show instead |
|---|---|
| poster | a fallback image of your choice (it must actually load) |
| release date | `N/A` |
| rating | `N/A` |
| overview | `No description available.` |

### R9 – Clicking a card
Clicking a card shows that movie's **title, full release date, rating out of 10, and overview**. A browser `alert()` is acceptable; a nicer pop-up earns bonus marks.

### R10 – No results & errors
- If the API returns nothing (or everything was filtered out), show the **"No movies found"** section.
- If the network fails or the API returns an error (e.g. wrong key), the app must **not** crash or leave the spinner spinning forever. Show "No movies found" and log the error to the console.

---

## 4. Step 0 – Plan on paper first (compulsory)

Before you type any JavaScript, on paper (not a document or AI), write:

1. **Element list:** every HTML element your script needs to talk to, and its `id` (open `index.html` and find them yourself).
2. **Flowchart:** from "user clicks Search" to "cards appear on screen". Include the three branches from R4 and the error path.
3. **Function list:** the functions you plan to write – for each: name, what it receives, what it returns, one-line purpose. Aim for small functions that do one job.
4. **Three test cases** you will try once finished (input → expected output).

Take a clear photo of it. It is submitted with your code.

---

## 5. Reference material you will need

### 5.1 The API – TMDB (The Movie Database)
1. Create a free account at **themoviedb.org** → Settings → API → request an API key (choose "Developer", purpose "Education").
2. Read the official docs at **developer.themoviedb.org**. The pages you need:
   - **Search → Movie** (search by title)
   - **Discover → Movie** (filter by genre, year, sort order)
   - **Movie Lists → Popular**
   - **Configuration / Images** (how to turn `poster_path` into a full image URL)

Finding the correct URLs, query parameters and response fields from the docs is part of the assignment. **Tip:** paste a URL in your browser first and study the JSON before writing any code for it.

> Keep your API key only in `script.js`. Never post it in a public group.

### 5.2 Card markup the CSS expects
`styles.css` is already written for this structure. Your JavaScript must generate exactly these class names, or the cards will look broken:

```
div.movie-card
 ├── img.movie-poster
 └── div.movie-info
      ├── h3.movie-title
      ├── div.movie-year
      ├── p.movie-overview
      └── div.movie-rating
           ├── span.rating-star      (contains ⭐)
           └── span.rating-score     (the number)
```

Cards go inside the element with id `moviesGrid`.

### 5.3 Concepts to revise (MDN)
`document.getElementById` · `addEventListener` (`click`, `keydown`, `DOMContentLoaded`) · `element.value` / `.trim()` · `style.display` · `document.createElement` / `appendChild` / `innerHTML` · `async` / `await` · `fetch` and `response.ok` · `response.json()` · `try … catch` · `encodeURIComponent` · `Array.prototype.filter` / `forEach` / `includes` · `parseInt` / `Number` · `new Date()` · `toFixed()` · `scrollIntoView`

---

## 6. Suggested milestones

Do them **in order**. Don't move on until the current one works. Commit after each one.

| # | Milestone | You're done when… |
|---|---|---|
| M1 | Connect elements | You can `console.log` every element and none is `null`. |
| M2 | Events | Clicking the button and pressing Enter in both inputs each log a message. The dropdown alone doesn't need Enter. |
| M3 | Read the inputs | Clicking Search logs the three values, with spaces trimmed. |
| M4 | First API call | On page load, the popular-movies array is logged in the console. |
| M5 | Show / hide states | Spinner, results, and no-results sections toggle correctly (R5, R10). |
| M6 | Render cards | Popular movies appear as styled cards (R6, R7). |
| M7 | Missing-data handling | Cards never show `undefined`, `null`, `NaN` or a broken image (R8). |
| M8 | Search by name + year | Title search works, with and without a year. |
| M9 | Genre filter on title search | Name + genre shows only movies of that genre. |
| M10 | Discover by genre / year | Genre-only, year-only and genre + year all work (sorted by popularity). |
| M11 | Card click | R9 works. |
| M12 | Error handling | Break your API key on purpose → app shows "No movies found", no endless spinner. Fix it again. |

---

## 7. Git & submission

1. `git init` in the project folder **before** M1.
2. Commit after **each milestone** with a meaningful message, e.g. `M6: render movie cards from popular list`. Minimum **10 commits**.
3. Push to a **public GitHub repo** named `cinesearch-<yourname>`.
4. Submit on the WebiGeeks group / portal:
   - GitHub repo link
   - Photo of your planning sheet (Section 4)
   - A 2–3 minute screen recording of the app, covering all rows of the test checklist below
   - `NOTES.md` in the repo: 5–10 lines on what was hardest and how you solved it (in your own words, Hinglish is fine)

---

## 8. Self-test checklist (run all before submitting)

| # | Test | Expected |
|---|---|---|
| T1 | Open the page | Popular movies load automatically |
| T2 | Name: `inception` → Enter | Inception appears among results |
| T3 | Name: `avatar`, Year: `2009` | Only 2009 results |
| T4 | Name: `batman`, Genre: Animation | Only animated Batman films |
| T5 | Genre: Horror only | Popular horror films |
| T6 | Year: `1994` only | Popular films of 1994 |
| T7 | Genre: Comedy + Year: `2015` | Popular 2015 comedies |
| T8 | Name: `asdfghjklqwe` | "No movies found" |
| T9 | Search twice in a row | Old cards are replaced, not duplicated |
| T10 | Name: `fast & furious` | Works (special characters don't break the URL) |
| T11 | Click any card | Details shown (R9) |
| T12 | Turn off Wi-Fi → Search | No crash, no endless spinner |
| T13 | Name: `   titanic   ` (extra spaces) | Same results as `titanic` |
| T14 | Browser console | No red errors during normal use |

---

## 9. Marking scheme (100)

| Area | Marks |
|---|---|
| Planning sheet – clear and matches the final code | 10 |
| Events & reading inputs (R2, R3) | 10 |
| API calls – correct endpoints & parameters (R1, R4) | 20 |
| Rendering cards correctly (R6, R7) | 15 |
| Edge cases & missing data (R8, R10) | 15 |
| Code quality – small functions, clear names, no repetition, own comments | 10 |
| Git history (≥10 meaningful commits) | 5 |
| **Viva – explains own code & makes a live change** | 15 |
| **Total** | **100** |

**Automatic penalties:** AI or copied code found → **0 for the assignment**. Single "final" commit → –20. Late submission → –5 per day.

---

## 10. Bonus (up to +15, only if everything above works)

- **B1 (+5)** Replace `alert()` with your own modal pop-up (you may add your own CSS in a new file).
- **B2 (+5)** A "Load more" button that fetches the next page of results and **adds** them below.
- **B3 (+3)** The year input stops at 2024 in the HTML. Fix it so the max is **always the current year** – set it from JavaScript, not by hard-coding.
- **B4 (+2)** Show a small "Showing X movies for …" line above the grid.

---

## 11. Sample viva questions (prepare for these)

1. Why does your search function need `async`? What happens if you remove `await` from one line?
2. Why do we use `encodeURIComponent` on the movie name but not on the genre?
3. Where exactly does your spinner get hidden if the API fails? Show me.
4. The genre dropdown gives `"28"` but the API gives `28`. How did you handle this, and why does it matter?
5. Why do you clear the grid before adding new cards?
6. What does `response.ok` tell you that `try … catch` alone does not?
7. **Live change:** show the rating as `7.3/10`, or sort results by rating before displaying.

Good luck – build it, break it, fix it. That's how developers are made. 💪

— Rohan Sharma, WebiGeeks
