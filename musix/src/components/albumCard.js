export function ArtistCard(album) {
    return `
    <div class="artist-card">
        <img src="${album.cover}" alt="${aalbum.name}" />
        <h3>${album.title}</h3>
        <p>${album.artist}</p>
    </div>
    `;
}