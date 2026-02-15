import { renderNavbar } from "../components/navbar";
import { navigate } from "./router";

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
});
