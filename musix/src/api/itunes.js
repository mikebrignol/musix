export async function searchMusic(query) {
    const res = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=12`
    );
    const data = await res.json();
    return data.results;
    
}