import { renderNavbar } from "../components/navbar";
import { navigate } from "./router";
import { AddToFavorites } from "../utils/favorites";

const navbar = document.querySelector('#navbar');
const app = document.querySelector('#app');

navbar.innerHTML = renderNavbar();


app.innerHTML = `
<h1>Expand your taste in Music</h1>
<p>Browse by genre, mood, or artists.</p>
`;

document.addEventListener('click', (e) => {
    if (e.target.dataset.page) {
        e.preventDefault();
        navigate(e.target.dataset.page);
    }
    if (e.target.classList.contains('fav-btn')) {
        const track = JSON.parse(e.target.dataset.track);
        AddToFavorites(track);
    }
});
