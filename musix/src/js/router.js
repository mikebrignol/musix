import {renderSearchPage} from '../pages/search.js';

const routes = {
    '/search': renderSearchPage
};


export function navigate(page) {
    const app = document.querySelector('#app');

    if (page === 'home') {
        app.innerHTML = `<h1>Home</h1>`;
    }

    if (page === 'genres') {
        app.innerHTML = `<h1>Genres</h1>`;
    }

    if (page === 'search') {
        app.innerHTML = `<h1>Search</h1>`;
        renderSearchPage(app);
    }

    if (page === 'favorites') {
        app.innerHTML = `<h1>Favorites</h1>`;
    }
}