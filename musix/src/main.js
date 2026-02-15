import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { searchMusic } from './api/itunes.js';
import './styles/main.css';
import './js/app.js';
import { renderSearchPage } from './pages/search.js';
import { renderHomePage } from './pages/home.js';


const app = document.getElementById('app');



const page = window.location.hash.replace('#', '');
if (page === 'search') {
  renderSearchPage(app);
} else {
  renderHomePage(app);
}


