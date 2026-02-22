import { getTracksByGenre } from "../services/lastfm";

export async function renderGenre(container, genreName) {
    if (!genreName) {
        window.location.hash = '#/genre/rock';
        return;
    };

    container.innerHTML = `
    <h1>Browse by genre</h1>

    <nav class="genre-nav">
        <a href="#/genre/rock">Rock</a>
        <a href="#/genre/pop">Pop</a>
        <a href="#/genre/jazz">Jazz</a>
    </nav>

    <div id="genre-results">
        <p>${genreName} Loading...</p>
    </div>
    `;
    

    const list = container.querySelector("#genre-results");

    try {
        const tracks = await getTracksByGenre(genreName);

        if (!tracks.length) {
            list.innerHTML = "<p>No tracks found.</p>";
            return;
    }

    list.innerHTML = tracks.map(track => {
      const imageUrl = track.image?.[2]?.["#text"] || "";

      return `
        <div class="track-card">
          <img src="${imageUrl}" alt="${track.name}" />
          <p>${track.name}</p>
          <small>${track.artist.name}</small>
        </div>
      `;
    }).join("");

  } catch (error) {
    list.innerHTML = "<p>Error loading tracks.</p>";
    console.error(error);
  }


}