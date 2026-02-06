export function ArtistCard(artist) {
    return `
    <div class="artist-card">
        <img src="${artist.image}" alt="${artist.name}" />
        <h3>${artist.name}</h3>
        <p>Followers: ${artist.followers ?? 'N/A'}</p>
    </div>
    `;
}