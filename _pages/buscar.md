---
layout: page
title: Buscar
permalink: /buscar/
---

<div class="search-wrapper">
  <input type="text" id="search-input" placeholder="Buscar artículos..." autocomplete="off">
  <ul id="results-container"></ul>
  <p id="no-results" style="display:none;">No se encontraron resultados.</p>
</div>

<script src="https://unpkg.com/simple-jekyll-search@1.10.0/dest/simple-jekyll-search.min.js"></script>
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: `
    <li class="search-result">
      <a href="{url}">
        <span class="result-title">{title}</span>
        <span class="result-meta">{date} · {categories}</span>
        <span class="result-excerpt">{excerpt}</span>
      </a>
    </li>`,
  noResultsText: '',
  limit: 10,
  fuzzy: false,
 
});
</script>

<style>
.search-wrapper { max-width: 680px; margin: 0 auto; }
#search-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1.5px solid #7c3aed;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
}
#search-input:focus { border-color: #1a0a2e; }
#results-container { list-style: none; padding: 0; margin: 1rem 0 0; }
.search-result { margin-bottom: 1.25rem; }
.search-result a {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
  padding: 14px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: border-color 0.2s;
}
.search-result a:hover { border-color: #7c3aed; }
.result-title { font-size: 16px; font-weight: 600; color: #1a0a2e; }
.result-meta { font-size: 12px; color: #1db87a; text-transform: uppercase; letter-spacing: 0.05em; }
.result-excerpt { font-size: 14px; color: #555; line-height: 1.5; }
#no-results { color: #888; font-size: 15px; margin-top: 1rem; }
</style>