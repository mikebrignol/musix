(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function s(){return`
    <nav class="navbar">
      <a href="#" data-page="home">Home</a>
      <a href="#" data-page="genres">Genres</a>
      <a href="#" data-page="search">Search</a>
      <a href="#" data-page="favorites">Favorites</a>
    </nav>
    `}function c(t){const n=document.querySelector("#app");t==="home"&&(n.innerHTML="<h1>Home</h1>"),t==="genres"&&(n.innerHTML="<h1>Genres</h1>"),t==="search"&&(n.innerHTML="<h1>Search</h1>"),t==="favorites"&&(n.innerHTML="<h1>Favorites</h1>")}const d=document.querySelector("#navbar"),f=document.querySelector("#app");d.innerHTML=s();f.innerHTML=`
<h1>Expand your taste in Music</h1>
<p>Browse by genre, mood, or artists.</p>
`;document.addEventListener("click",t=>{t.target.dataset.page&&(t.preventDefault(),c(t.target.dataset.page))});const u=document.querySelector("#app");u.innerHTML=`
  <header id="header"></header>
  <main id="main-content"></main>
  <footer id="footer"></footer>
`;
