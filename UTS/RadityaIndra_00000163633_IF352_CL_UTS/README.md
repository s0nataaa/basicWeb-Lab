# UTS Lab IF352 — Kunci Jawaban / Answer Key

Reference solution for the "GreenLeaf Plant Store" UTS Lab case study
(SoalUTS2026IF352BasicWebLabEng.docx / ...Ind.docx). **For lecturer/grader
use only — do not distribute to students.**

## How to run it

Just double-click `index.html` — no server, no build step, no internet
needed. Everything (Bootstrap, jQuery, this solution) runs from local files,
exactly like a student's submission is expected to.

## Files

| File | What it is |
|---|---|
| `index.html` | Semantic page structure (Feature 1) |
| `style.css` | Custom styling on top of Bootstrap (Feature 1) |
| `script.js` | **Main answer key** — vanilla JavaScript / DOM API implementation of Features 2–4 and the bonus |
| `script.jquery-equivalent.js` | Optional reference showing the same interactive behaviour written with jQuery instead, for grading students who chose that route (not loaded by `index.html` by default — see the comment at the top of the file for how to swap it in) |
| `lib/` | Offline Bootstrap 5.3.8 + jQuery 3.7.1 (same as the starter kit) |

## Mapping to the Assessment Rubric

- **Project Structure & Semantic HTML (15%)** — `index.html` uses
  `<header>/<nav>`, `<main>`, `<section>`, `<footer>`; no unstyled generic
  `<div>` soup.
- **Responsive Layout with Bootstrap (20%)** — `navbar-expand-lg` collapses
  to a hamburger below 992px; product columns are `col-12 col-lg-4` (1 col
  under 992px, 3 cols from 992px up, per the exam spec).
- **Custom CSS Styling (10%)** — `style.css` defines the whole green/cream
  color scheme, card shadows, spacing, and typography; nothing is left as
  bare Bootstrap defaults.
- **Dynamic Product Rendering / DOM (20%)** — `renderProducts()` in
  `script.js` builds every card from the `plants` array (never hand-written
  in HTML) and sets `data-category` on each card; shows "No plants
  available." when the filtered list is empty.
- **Category Filter (15%)** — the four `.filter-btn` buttons toggle
  `.active` exclusively and call `applyFilters()`.
- **Add-to-Cart Counter (10%)** — implemented with **event delegation** on
  `#productGrid` (`grid.addEventListener("click", …)` checking
  `e.target`), specifically so it keeps working for cards that get
  re-rendered after filtering/searching — a common bug in student
  submissions is wiring the click handler only once at page load, which
  breaks after the grid re-renders.
- **Code Quality & Submission Compliance (10%)** — commented, no console
  errors/warnings (verified with DevTools open and with all network access
  blocked).
- **Bonus — Live Search (+5%)** — `#searchInput`'s `input` event updates
  `currentSearch` and re-runs `applyFilters()`, which combines it with
  `currentFilter` so search + category filter work together.

## Verified offline

Tested end-to-end with Playwright with **all non-local network requests
blocked** (true offline simulation): initial render (6 cards), each
category filter, the add-to-cart counter, live search alone, live search
combined with a category filter, and the empty-state message all behaved
correctly, on both a desktop-width (1280px) and mobile-width (375px,
including the navbar hamburger toggle) viewport — with zero console errors
or warnings in every case. The jQuery-equivalent script was verified the
same way.

## A note on "the" answer key

This is *a* correct solution, not *the only* correct one — grade a
student's submission against the rubric criteria and their observable
behaviour, not against how closely their code resembles this file. Class
names, HTML structure details, and code style are free to differ as long
as each rubric criterion is genuinely satisfied.
