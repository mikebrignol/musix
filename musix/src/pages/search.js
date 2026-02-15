import { searchMusic } from "../api/itunes";
import { trackCard } from "../components/trackCard";

export function renderSearchPage(container) {
    container.innerHTML = `
    <input id="searchInput" placeholder="Search for music..."/>
    <button id="searchBtn">Search</button>
    <div id="results"></div>
    `;

    const input = container.querySelector('#searchInput');
    const btn = container.querySelector('#searchBtn');
    const results = container.querySelector('#results');

    btn.addEventListener('click', async () => {
        if (!input.value.trim()) return;

        const data = await searchMusic(input.value);
        results.innerHTML = data.map(track => trackCard(track)).join('');
    });
}