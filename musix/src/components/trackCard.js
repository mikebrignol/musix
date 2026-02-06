export function trackCard(track) {
    return `
    <div class="track-card">
      <img src="${track.image}" />
      <h3>${track.title}</h3>
      <p>${track.artist}</p>
      <button>Preview</button>
    </div>
  `;    
}

