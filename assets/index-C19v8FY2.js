(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();async function l(e){return(await(await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(e)}&entity=song&limit=12`)).json()).results}function m(){return`
    <nav class="navbar">
      <a href="#" data-page="home">Home</a>
      <a href="#" data-page="genres">Genres</a>
      <a href="#" data-page="search">Search</a>
      <a href="#" data-page="favorites">Favorites</a>
    </nav>
    `}function u(e){return`
    <div class="track-card">
      <img src="${e.artworkUrl100}" alt="${e.trackName}" />
      <p>${e.trackName}</p>
      <small>${e.artistName}</small>
      <button class="fav-btn" data-track='${JSON.stringify(e)}'>
        ❤️ Add
      </button>
    </div>
  `}function f(e){e.innerHTML=`
    <input id="searchInput" placeholder="Search for music..."/>
    <button id="searchBtn">Search</button>
    <div id="results"></div>
    `;const t=e.querySelector("#searchInput"),n=e.querySelector("#searchBtn"),a=e.querySelector("#results");n.addEventListener("click",async()=>{if(!t.value.trim())return;const r=await l(t.value);a.innerHTML=r.map(s=>u(s)).join("")})}const i="favorites";function c(){return JSON.parse(localStorage.getItem(i))||[]}function g(e){const t=c();t.find(n=>n.trackId===e.trackId)||(t.push(e),localStorage.setItem(i,JSON.stringify(t)))}function v(e){const t=c().filter(n=>n.trackId!==e);localStorage.setItem(i,JSON.stringify(t))}function p(e){const t=c();e.innerHTML=`
    <h1>Your Favorites</h1>
    <div id="favorites-list"></div>
    `;const n=e.querySelector("#favorites-list");t.length===0&&(n.innerHTML="<p>No favorites yet</p>"),n.innerHTML=t.map(a=>`
    <div class="track-card">
      <img src="${a.artworkUrl100}" alt="${a.trackName}" />
      <p>${a.trackName}</p>
      <small>${a.artistName}</small>
      <button class="remove-btn" data-id="${a.trackId}">
        ❌ Remove
      </button>
    </div>`).join(""),n.addEventListener("click",a=>{if(a.target.classList.contains("remove-btn")){const r=Number(a.target.dataset.id);v(r),p(e)}})}async function h(e){e.innerHTML=`
    <h1>Expand your taste in Music</h1>
    <p>Browse what's trending right now.</p>
    <div id="trending"></div>
    `;const t=["pop","hip hop","afrobeats","electronics"],n=t[Math.floor(Math.random()*t.length)],a=e.querySelector("#trending"),r=await l(n);a.innerHTML=r.slice(0,8).map(s=>u(s)).join("")}const y="8eb7608f4dd24c8fc29553cdc2321acd",L="https://ws.audioscrobbler.com/2.0/";async function b(e){const t=`${L}?method=tag.gettoptracks&tag=${e}&api_key=${y}&format=json&limit=20`;try{const n=await fetch(t);if(!n.ok)throw new Error("Failed to fetch genre tracks");const a=await n.json();return!a.tracks||!a.tracks.track?[]:a.tracks.track}catch(n){console.error("Laast.fm did not respond",n)}}async function S(e,t){if(e.innerHTML=`
    <h1>Browse by genre</h1>

    <nav class="genre-nav">
        <a href="#/genre/rock">Rock</a>
        <a href="#/genre/pop">Pop</a>
        <a href="#/genre/jazz">Jazz</a>
    </nav>

    <div id="genre-results">
        <p>${t} Loading...</p>
    </div>
    `,!t){window.location.hash="#/genre/rock";return}const n=e.querySelector("#genre-results");try{const a=await b(t);if(!a.length){n.innerHTML="<p>No tracks found.</p>";return}n.innerHTML=a.map(r=>`
        <div class="track-card">
          <img src="${r.image?.[2]?.["#text"]||""}" alt="${r.name}" />
          <p>${r.name}</p>
          <small>${r.artist.name}</small>
        </div>
      `).join("")}catch(a){n.innerHTML="<p>Error loading tracks.</p>",console.error(a)}}function w(e){const t=document.querySelector("#app"),r=window.location.hash.slice(2).split("/")[1];e==="home"&&h(t),e==="genres"&&S(t,r),e==="search"&&(t.innerHTML="<h1>Search</h1>",f(t)),e==="favorites"&&(t.innerHTML="<h1>Favorites</h1>"),e==="favorites"&&p(t)}const k=document.querySelector("#navbar"),M=document.querySelector("#app");k.innerHTML=m();M.innerHTML=`
<h1>Expand your taste in Music</h1>
<p>Browse by genre, mood, or artists.</p>
`;document.addEventListener("click",e=>{if(e.target.dataset.page&&(e.preventDefault(),w(e.target.dataset.page)),e.target.classList.contains("fav-btn")){const t=JSON.parse(e.target.dataset.track);g(t)}});const d=document.getElementById("app"),$=window.location.hash.replace("#","");$==="search"?f(d):h(d);
