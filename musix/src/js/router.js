import {renderSearchPage} from '../pages/search.js';
import { renderFavorites } from '../pages/favorites.js';
import { renderHomePage } from '../pages/home.js';
import { renderGenre } from '../pages/genre.js';



export function navigate(page) {
    const app = document.querySelector('#app');
    const hash = window.location.hash.slice(2);

    const segments = hash.split('/');

    const param = segments[1];

    if (page === 'home') {
        renderHomePage(app);
    }

    if (page === 'genres') {
        renderGenre(app, param);
    }

    if (page === 'search') {
        app.innerHTML = `<h1>Search</h1>`;
        renderSearchPage(app);
    }

    if (page === 'favorites') {
        app.innerHTML = `<h1>Favorites</h1>`;
    }

    if (page === 'favorites') {
        renderFavorites(app);
    }

}