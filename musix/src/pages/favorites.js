import { getFavorites, removeFromFavorites } from "../utils/favorites";
import { trackCard } from "../components/trackCard";

export function renderFavorites(container) {
    const favorites = getFavorites();

    container.innerHTML = `
    <h1>Your Favorites</h1>
    <div id="favorites-list"></div>
    `

    const list = container.querySelector("#favorites-list");

    if (favorites.length === 0) {
        list.innerHTML = `<p>No favorites yet</p>`
    }

    list.innerHTML = favorites.map(track => `
    <div class="track-card">
      <img src="${track.artworkUrl100}" alt="${track.trackName}" />
      <p>${track.trackName}</p>
      <small>${track.artistName}</small>
      <button class="remove-btn" data-id="${track.trackId}">
        ❌ Remove
      </button>
    </div>`).join('');

    list.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const trackId = Number(e.target.dataset.id);
            removeFromFavorites(trackId);

            renderFavorites(container);
        }
    });
}