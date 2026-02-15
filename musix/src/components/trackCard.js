export function trackCard(track) {
    return `
    <div class="track-card">
      <img src="${track.artworkUrl100}" alt="${track.trackName}" />
      <p>${track.trackName}</p>
      <small>${track.artistName}</small>
    </div>
  `;    
}

