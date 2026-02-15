(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();async function i(e){return(await(await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(e)}&entity=song&limit=12`)).json()).results}function u(){return`
    <nav class="navbar">
      <a href="#" data-page="home">Home</a>
      <a href="#" data-page="genres">Genres</a>
      <a href="#" data-page="search">Search</a>
      <a href="#" data-page="favorites">Favorites</a>
    </nav>
    `}function d(e){return`
    <div class="track-card">
      <img src="${e.artworkUrl100}" alt="${e.trackName}" />
      <p>${e.trackName}</p>
      <small>${e.artistName}</small>
    </div>
  `}function c(e){e.innerHTML=`
    <input id="searchInput" placeholder="Search for music..."/>
    <button id="searchBtn">Search</button>
    <div id="results"></div>
    `;const r=e.querySelector("#searchInput"),n=e.querySelector("#searchBtn"),s=e.querySelector("#results");n.addEventListener("click",async()=>{if(!r.value.trim())return;const t=await i(r.value);s.innerHTML=t.map(a=>d(a)).join("")})}function l(e){const r=document.querySelector("#app");e==="home"&&(r.innerHTML="<h1>Home</h1>"),e==="genres"&&(r.innerHTML="<h1>Genres</h1>"),e==="search"&&(r.innerHTML="<h1>Search</h1>",c(r)),e==="favorites"&&(r.innerHTML="<h1>Favorites</h1>")}const p=document.querySelector("#navbar"),f=document.querySelector("#app");p.innerHTML=u();f.innerHTML=`
<h1>Expand your taste in Music</h1>
<p>Browse by genre, mood, or artists.</p>
`;document.addEventListener("click",e=>{e.target.dataset.page&&(e.preventDefault(),l(e.target.dataset.page))});const h=document.getElementById("app"),m=window.location.hash.replace("#","");m==="search"&&c(h);
