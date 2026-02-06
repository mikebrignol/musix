import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import './styles/main.css';
import './js/app.js';

const app = document.querySelector('#app');

app.innerHTML = `
  <header id="header"></header>
  <main id="main-content"></main>
  <footer id="footer"></footer>
`;

