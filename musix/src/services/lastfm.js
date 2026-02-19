const API_KEY = "8eb7608f4dd24c8fc29553cdc2321acd";
const BASE_URL = "https://ws.audioscrobbler.com/2.0/";

export async function getTracksByGenre(genre) {
    const url = `${BASE_URL}?method=tag.gettoptracks&tag=${genre}&api_key=${API_KEY}&format=json&limit=20`;

    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Failed to fetch genre tracks");
        }
    
    
    const data = await res.json();

    if (!data.tracks || !data.tracks.track) {
        return [];
    }

    return data.tracks.track;
    } catch (error) {
    console.error("Laast.fm did not respond", error);
    }
}