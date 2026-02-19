import { searchMusic } from "../api/itunes";
import { trackCard } from "../components/trackCard"

export async function renderHomePage(container) {
    container.innerHTML = `
    <h1>Expand your taste in Music</h1>
    <p>Browse what's trending right now.</p>
    <div id="trending"></div>
    `;

    const topics = ["pop", "hip hop", "afrobeats", "electronics"];

    const random = topics[Math.floor(Math.random() * topics.length)];

    const trendingContainer = container.querySelector('#trending');

    const trendingTracks = await searchMusic(random);

    trendingContainer.innerHTML = trendingTracks.slice(0, 8).map(track => trackCard(track)).join('');
}
