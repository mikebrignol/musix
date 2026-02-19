const STORAGE_KEY = "favorites";

export function getFavorites() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function AddToFavorites(track) {
    const favorites = getFavorites();


    if (!favorites.find(item => item.trackId === track.trackId)) {
    favorites.push(track);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }
}

export function removeFromFavorites(trackId) {
    const favorites = getFavorites().filter(
        track => track.trackId !== trackId
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

