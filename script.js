
// ============================================================
// DATA
// ============================================================
const MOVIES = [
  { id:1, title:"Dune: Part Two", year:2024, rating:"8.5", type:"movie", genre:"sci-fi", desc:"Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.", img:"https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&q=80", duration:"2h 46m", quality:"4K", isPrime:true, tags:["Sci-Fi","Epic","Adventure"], cast:["Timothée Chalamet","Zendaya","Rebecca Ferguson","Josh Brolin"] },
  { id:2, title:"Oppenheimer", year:2023, rating:"8.9", type:"movie", genre:"drama", desc:"The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.", img:"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&q=80", duration:"3h 0m", quality:"4K", isPrime:false, tags:["Drama","Biography","History"], cast:["Cillian Murphy","Emily Blunt","Matt Damon","Robert Downey Jr."] },
  { id:3, title:"Poor Things", year:2023, rating:"8.0", type:"movie", genre:"comedy", desc:"The fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.", img:"https://images.unsplash.com/photo-1543746066-b8dd4e50a07c?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1543746066-b8dd4e50a07c?w=1200&q=80", duration:"2h 21m", quality:"HD", isPrime:true, tags:["Comedy","Fantasy","Drama"], cast:["Emma Stone","Mark Ruffalo","Willem Dafoe","Ramy Youssef"] },
  { id:4, title:"Killers of the Flower Moon", year:2023, rating:"7.8", type:"movie", genre:"thriller", desc:"Members of the Osage Nation are murdered under mysterious circumstances in the 1920s, sparking a major FBI investigation.", img:"https://images.unsplash.com/photo-1506792006437-256b665541e2?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1506792006437-256b665541e2?w=1200&q=80", duration:"3h 26m", quality:"4K", isPrime:false, tags:["Crime","Drama","History"], cast:["Leonardo DiCaprio","Lily Gladstone","Robert De Niro"] },
  { id:5, title:"Civil War", year:2024, rating:"7.3", type:"movie", genre:"action", desc:"A journey across a dystopian future America, following a team of military-embedded journalists covering a second US Civil War.", img:"https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=1200&q=80", duration:"1h 49m", quality:"4K", isPrime:true, isNew:true, tags:["Action","Thriller","Drama"], cast:["Kirsten Dunst","Wagner Moura","Cailee Spaeny"] },
  { id:6, title:"The Zone of Interest", year:2023, ratng:"7.9", type:"movie", genre:"drama", desc:"A Nazi commandant and his wife build their dream life next to the Auschwitz concentration camp.", img:"https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=1200&q=80", duration:"1h 45m", quality:"HD", isPrime:false, tags:["Drama","War","Historical"], cast:["Sandra Hüller","Christian Friedel"] },
  { id:7, title:"Anyone But You", year:2023, rating:"6.4", type:"movie", genre:"comedy", desc:"After an amazing first date, Bea and Ben's chemistry turns ice cold — until they find themselves unexpectedly thrown together at a wedding.", img:"https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1200&q=80", duration:"1h 43m", quality:"HD", isPrime:true, isNew:true, tags:["Romantic Comedy","Comedy"], cast:["Sydney Sweeney","Glen Powell"] },
  { id:8, title:"Godzilla x Kong", year:2024, rating:"6.3", type:"movie", genre:"action", desc:"The epic battle continues as Godzilla and Kong must reunite against a colossal undiscovered threat hidden within the depths of Hollow Earth.", img:"https://images.unsplash.com/photo-1615220367979-d39f5356aedc?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1615220367979-d39f5356aedc?w=1200&q=80", duration:"1h 55m", quality:"4K", isPrime:false, isNew:true, tags:["Action","Sci-Fi","Monster"], cast:["Rebecca Hall","Brian Tyree Henry","Dan Stevens"] },
  { id:9, title:"Shogun", year:2024, rating:"9.0", type:"series", genre:"drama", desc:"When a mysterious European ship is found adrift off the coast of Japan, its English navigator works to navigate the clash of cultures and deadly politics.", img:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80", duration:"10 Episodes", quality:"4K", isPrime:true, tags:["Drama","Historical","War"], cast:["Hiroyuki Sanada","Cosmo Jarvis","Anna Sawai"] },
  { id:10, title:"The Boys", year:2024, rating:"8.7", type:"series", genre:"action", desc:"A group of vigilantes sets out to take down corrupt superheroes who abuse their superpowers. Season 4 raises the stakes higher than ever.", img:"https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1200&q=80", duration:"8 Episodes", quality:"4K", isPrime:true, isNew:true, tags:["Action","Comedy","Superhero"], cast:["Karl Urban","Jack Quaid","Antony Starr","Erin Moriarty"] },
  { id:11, title:"Fallout", year:2024, rating:"8.5", type:"series", genre:"sci-fi", desc:"Set in the future, the series explores a world where the post-apocalyptic wasteland is home to warring factions and remnants of civilization.", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", duration:"8 Episodes", quality:"4K", isPrime:true, isNew:true, tags:["Sci-Fi","Action","Comedy"], cast:["Ella Purnell","Walton Goggins","Kyle MacLachlan"] },
  { id:12, title:"Reacher", year:2024, rating:"7.9", type:"series", genre:"action", desc:"Jack Reacher, a veteran military police investigator, has just recently entered civilian life when he is arrested for a murder he didn't commit.", img:"https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=1200&q=80", duration:"8 Episodes", quality:"4K", isPrime:true, tags:["Action","Crime","Thriller"], cast:["Alan Ritchson","Maria Sten","Serinda Swan"] },
  { id:13, title:"Rings of Power", year:2023, rating:"7.0", type:"series", genre:"sci-fi", desc:"An epic drama set thousands of years before the events of Tolkien's The Hobbit and The Lord of the Rings books.", img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80", duration:"Season 2", quality:"4K", isPrime:true, tags:["Fantasy","Adventure","Epic"], cast:["Morfydd Clark","Robert Aramayo","Markella Kavenagh"] },
  { id:14, title:"Silo", year:2024, rating:"8.2", type:"series", genre:"sci-fi", desc:"In a ruined and toxic future, thousands of people live in a giant silo underground. But no one knows why — or if the silo was always their home.", img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80", duration:"Season 2", quality:"4K", isPrime:false, tags:["Sci-Fi","Mystery","Dystopia"], cast:["Rebecca Ferguson","Common","Tim Robbins"] },
  { id:15, title:"Upload", year:2024, rating:"7.8", type:"series", genre:"comedy", desc:"Set in a future where humans can choose to be uploaded into a virtual afterlife, a young man navigates this digital world.", img:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80", duration:"Season 4", quality:"HD", isPrime:true, tags:["Comedy","Sci-Fi","Romance"], cast:["Robbie Amell","Andy Allo","Allegra Edwards"] },
  { id:16, title:"Invincible", year:2024, rating:"8.7", type:"series", genre:"animation", desc:"Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet.", img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200&q=80", duration:"Season 3", quality:"4K", isPrime:true, tags:["Animation","Action","Superhero"], cast:["Steven Yeun","Sandra Oh","J.K. Simmons"] },
  { id:17, title:"Air", year:2023, rating:"7.6", type:"movie", genre:"drama", desc:"Follows Nike's history-making campaign to sign basketball player Michael Jordan in 1984.", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80", duration:"1h 52m", quality:"4K", isPrime:true, tags:["Drama","Sports","Biography"], cast:["Matt Damon","Ben Affleck","Viola Davis"] },
  { id:18, title:"Knock at the Cabin", year:2023, rating:"6.2", type:"movie", genre:"thriller", desc:"A young girl and her parents are taken hostage by armed strangers who demand that the family make an unthinkable choice.", img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", duration:"1h 40m", quality:"HD", isPrime:false, tags:["Thriller","Horror","Mystery"], cast:["Dave Bautista","Jonathan Groff","Ben Aldridge"] },
  { id:19, title:"65", year:2023, rating:"5.5", type:"movie", genre:"sci-fi", desc:"After a catastrophic crash on an unknown planet, pilot Mills quickly discovers he's actually landed on Earth 65 million years ago.", img:"https://images.unsplash.com/photo-1464802686167-b939a6910659?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1200&q=80", duration:"1h 33m", quality:"4K", isPrime:true, tags:["Action","Sci-Fi","Adventure"], cast:["Adam Driver","Ariana Greenblatt","Chloe Coleman"] },
  { id:20, title:"Saltburn", year:2023, rating:"7.1", type:"movie", genre:"thriller", desc:"A student at Oxford University finds himself drawn into the world of a charming and aristocratic classmate.", img:"https://images.unsplash.com/photo-1565374395542-0ce18882c857?w=400&q=80", backdrop:"https://images.unsplash.com/photo-1565374395542-0ce18882c857?w=1200&q=80", duration:"2h 7m", quality:"HD", isPrime:false, tags:["Thriller","Drama","Mystery"], cast:["Barry Keoghan","Jacob Elordi","Rosamund Pike"] },
];

const AVATARS = ["https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80","https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80","https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80","https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80","https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80"];

const heroData = MOVIES[8]; // Shogun as hero

// ============================================================
// STATE
// ============================================================
let watchlist = JSON.parse(localStorage.getItem('pv_watchlist') || '[]');
let playerPlaying = false;
let playerProgress = 0;
let playerInterval = null;
let currentDetailItem = null;
let controlsTimeout = null;

// ============================================================
// RENDER
// ============================================================
function createCard(item, wide = false) {
  const div = document.createElement('div');
  div.className = 'card' + (wide ? ' card-wide' : '');
  const progress = item.progress ? `<div class="card-progress"><div class="card-progress-bar" style="width:${item.progress}%"></div></div>` : '';
  const primeBadge = item.isPrime ? '<span class="badge-prime">prime</span>' : '';
  const newBadge = item.isNew ? '<span class="badge-new">NEW</span>' : '';
  div.innerHTML = `
    <img src="${item.img}" alt="${item.title}" loading="lazy" />
    ${primeBadge}${newBadge}
    <div class="card-overlay">
      <div class="card-title">${item.title}</div>
      <div class="card-meta">★ ${item.rating} · ${item.year} · ${item.quality || 'HD'}</div>
      <div class="card-actions">
        <button class="card-btn" onclick="event.stopPropagation(); openPlayer(MOVIES.find(m=>m.id==${item.id})||${JSON.stringify(item).replace(/"/g,'&quot;')})" title="Play">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
        </button>
        <button class="card-btn outline" onclick="event.stopPropagation(); openDetail(MOVIES.find(m=>m.id==${item.id})||${JSON.stringify(item).replace(/"/g,'&quot;')})" title="Info">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
        </button>
        <button class="card-btn outline" onclick="event.stopPropagation(); toggleWatchlistItem(MOVIES.find(m=>m.id==${item.id})||${JSON.stringify(item).replace(/"/g,'&quot;')})" title="Watchlist" id="wl-${item.id}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
      </div>
    </div>
    ${progress}
  `;
  div.addEventListener('click', () => openDetail(item));
  return div;
}

function populateRow(rowId, items, wide = false) {
  const row = document.getElementById(rowId);
  if (!row) return;
  row.innerHTML = '';
  items.forEach(i => row.appendChild(createCard(i, wide)));
}

function initRows() {
  const continueItems = MOVIES.slice(0, 5).map((m, i) => ({ ...m, progress: [35, 72, 18, 55, 90][i] }));
  populateRow('continue-row', continueItems, true);
  populateRow('recommended-row', shuffle(MOVIES).slice(0, 10));
  populateRow('new-row', MOVIES.filter(m => m.isNew));
  populateRow('trending-row', [...MOVIES].sort((a, b) => b.rating - a.rating).slice(0, 10));
  populateRow('originals-row', MOVIES.filter(m => m.isPrime).slice(0, 8));
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ============================================================
// SCROLL
// ============================================================
function scrollRow(rowId, dir) {
  const row = document.getElementById(rowId);
  if (row) row.scrollBy({ left: dir * 600, behavior: 'smooth' });
}

// ============================================================
// HERO AUTO-ROTATE
// ============================================================
const heroItems = MOVIES.filter(m => m.isPrime).slice(0, 5);
let heroIdx = 0;
function rotateHero() {
  heroIdx = (heroIdx + 1) % heroItems.length;
  const h = heroItems[heroIdx];
  document.getElementById('hero-img').src = h.backdrop || h.img;
  document.getElementById('hero-title').textContent = h.title;
  document.getElementById('hero-desc').textContent = h.desc;
}
setInterval(rotateHero, 8000);

// ============================================================
// PLAYER
// ============================================================
function openPlayer(item) {
  document.getElementById('player-modal').classList.add('open');
  document.getElementById('player-title-text').textContent = item.title;
  document.getElementById('player-thumb').src = item.backdrop || item.img;
  playerPlaying = false;
  playerProgress = 0;
  updatePlayIcon();
  document.getElementById('progress-fill').style.width = '0%';
  document.getElementById('time-display').textContent = '0:00 / ' + (item.duration || '1:45:00');
  showControls();
  document.body.style.overflow = 'hidden';
}

function closePlayer() {
  document.getElementById('player-modal').classList.remove('open');
  if (playerInterval) clearInterval(playerInterval);
  playerPlaying = false;
  document.body.style.overflow = '';
}

function togglePlay() {
  playerPlaying = !playerPlaying;
  updatePlayIcon();
  if (playerPlaying) {
    playerInterval = setInterval(() => {
      playerProgress = Math.min(100, playerProgress + 0.03);
      document.getElementById('progress-fill').style.width = playerProgress + '%';
      const elapsed = Math.floor(playerProgress * 6318 / 100);
      document.getElementById('time-display').textContent = formatTime(elapsed) + ' / 1:45:18';
    }, 500);
  } else {
    clearInterval(playerInterval);
  }
  showControls();
}

function formatTime(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  return `${m}:${String(sec).padStart(2,'0')}`;
}

function updatePlayIcon() {
  const playModal = document.getElementById('play-overlay');
  const btn = document.getElementById('play-pause-btn');
  if (playerPlaying) {
    playModal.style.opacity = '0';
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width:22px;height:22px"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
  } else {
    playModal.style.opacity = '1';
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width:22px;height:22px"><polygon points="5,3 19,12 5,21"/></svg>';
  }
}

function skipBack() {
  playerProgress = Math.max(0, playerProgress - 0.5);
  document.getElementById('progress-fill').style.width = playerProgress + '%';
  flashSkip('left');
  showControls();
}

function skipForward() {
  playerProgress = Math.min(100, playerProgress + 0.5);
  document.getElementById('progress-fill').style.width = playerProgress + '%';
  flashSkip('right');
  showControls();
}

function flashSkip(dir) {
  const el = document.getElementById('skip-' + dir);
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 800);
}

function seekTo(e) {
  const wrap = document.getElementById('progress-wrap');
  const rect = wrap.getBoundingClientRect();
  playerProgress = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
  document.getElementById('progress-fill').style.width = playerProgress + '%';
  showControls();
}

function toggleMute() {
  const slider = document.getElementById('volume-slider');
  slider.value = slider.value > 0 ? 0 : 80;
}

function setVolume(v) { /* visual only */ }

function toggleFullscreen() {
  const modal = document.getElementById('player-modal');
  if (!document.fullscreenElement) {
    modal.requestFullscreen().catch(() => showToast('Fullscreen not available'));
  } else {
    document.exitFullscreen();
  }
}

function showControls() {
  document.getElementById('player-modal').classList.add('controls-visible');
  clearTimeout(controlsTimeout);
  if (playerPlaying) {
    controlsTimeout = setTimeout(() => document.getElementById('player-modal').classList.remove('controls-visible'), 3000);
  }
}

document.getElementById('player-modal').addEventListener('mousemove', showControls);
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('player-modal');
  if (!modal.classList.contains('open')) return;
  if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
  if (e.code === 'ArrowRight') skipForward();
  if (e.code === 'ArrowLeft') skipBack();
  if (e.code === 'Escape') closePlayer();
});

// ============================================================
// DETAIL MODAL
// ============================================================
function openDetail(item) {
  currentDetailItem = item;
  document.getElementById('detail-modal').classList.add('open');
  document.getElementById('detail-backdrop-img').src = item.backdrop || item.img;
  document.getElementById('detail-title').textContent = item.title;
  document.getElementById('detail-desc').textContent = item.desc;
  const meta = document.getElementById('detail-meta');
  meta.innerHTML = `<span class="rating">★ ${item.rating}</span><span>${item.year}</span><span>${item.duration}</span><span class="quality">${item.quality || 'HD'}</span>`;
  const tags = document.getElementById('detail-tags');
  tags.innerHTML = (item.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
  const castList = document.getElementById('cast-list');
  castList.innerHTML = (item.cast || []).slice(0, 5).map((c, i) => `
    <div class="cast-item">
      <img class="cast-avatar" src="${AVATARS[i % AVATARS.length]}" alt="${c}" />
      <div class="cast-name">${c}</div>
    </div>
  `).join('');
  document.getElementById('detail-play-btn').onclick = () => { closeDetail(); openPlayer(item); };
  const wlBtn = document.getElementById('detail-watchlist-btn');
  const inWL = watchlist.some(w => w.id === item.id);
  wlBtn.innerHTML = inWL
    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> In Watchlist'
    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to Watchlist';
  wlBtn.onclick = () => { toggleWatchlistItem(item); openDetail(item); };
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  document.getElementById('detail-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeDetailOutside(e) {
  if (e.target === document.getElementById('detail-modal')) closeDetail();
}

// ============================================================
// WATCHLIST
// ============================================================
function toggleWatchlistItem(item) {
  const idx = watchlist.findIndex(w => w.id === item.id);
  if (idx === -1) {
    watchlist.push(item);
    showToast('✓ Added to Watchlist');
  } else {
    watchlist.splice(idx, 1);
    showToast('Removed from Watchlist');
  }
  localStorage.setItem('pv_watchlist', JSON.stringify(watchlist));
  if (document.getElementById('watchlist-page').classList.contains('open')) renderWatchlist();
}

function showWatchlist() {
  document.getElementById('home-content').classList.add('hidden');
  document.getElementById('watchlist-page').classList.add('open');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('nav-watchlist').classList.add('active');
  renderWatchlist();
}

function showHome() {
  document.getElementById('home-content').classList.remove('hidden');
  document.getElementById('watchlist-page').classList.remove('open');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('nav-home').classList.add('active');
}

function renderWatchlist() {
  const container = document.getElementById('watchlist-content');
  if (watchlist.length === 0) {
    container.innerHTML = `
      <div class="watchlist-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        <h3>Your watchlist is empty</h3>
        <p>Add movies and shows to watch later</p>
      </div>
    `;
  } else {
    const grid = document.createElement('div');
    grid.className = 'watchlist-grid';
    watchlist.forEach(item => grid.appendChild(createCard(item)));
    container.innerHTML = '';
    container.appendChild(grid);
  }
}

// ============================================================
// SEARCH
// ============================================================
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchResults.classList.remove('open'); return; }
  const results = MOVIES.filter(m => m.title.toLowerCase().includes(q) || m.genre.toLowerCase().includes(q) || (m.tags || []).some(t => t.toLowerCase().includes(q))).slice(0, 6);
  if (!results.length) { searchResults.classList.remove('open'); return; }
  searchResults.innerHTML = results.map(m => `
    <div class="search-result-item" onclick="closeSearch(); openDetail(MOVIES.find(x=>x.id==${m.id}))">
      <img src="${m.img}" alt="${m.title}" />
      <div class="info">
        <div class="title">${m.title}</div>
        <div class="meta">★ ${m.rating} · ${m.year} · ${m.type}</div>
      </div>
    </div>
  `).join('');
  searchResults.classList.add('open');
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSearch();
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrap')) closeSearch();
});

function closeSearch() {
  searchResults.classList.remove('open');
  searchInput.value = '';
}

// ============================================================
// CATEGORIES FILTER
// ============================================================
function setCategory(cat, el) {
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  if (el) el.classList.add('active');
  const filtered = cat === 'all' ? MOVIES : MOVIES.filter(m => m.genre === cat);
  populateRow('recommended-row', shuffle(filtered).slice(0, 10));
  populateRow('trending-row', [...filtered].sort((a, b) => b.rating - a.rating).slice(0, 10));
}

function filterCategory(type) {
  showHome();
  const filtered = MOVIES.filter(m => m.type === type);
  populateRow('recommended-row', shuffle(filtered).slice(0, 10));
  populateRow('trending-row', [...filtered].sort((a, b) => b.rating - a.rating).slice(0, 10));
  populateRow('new-row', filtered.filter(m => m.isNew));
  populateRow('originals-row', filtered.filter(m => m.isPrime).slice(0, 8));
  showToast(`Showing ${type === 'movie' ? 'Movies' : 'TV Shows'}`);
}

// ============================================================
// TOAST
// ============================================================
let toastTimeout;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove('show'), 2500);
}

// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.background = window.scrollY > 50
    ? 'rgba(10,10,20,0.98)'
    : 'linear-gradient(to bottom, rgba(10,10,20,0.98), rgba(10,10,20,0.7))';
});

// ============================================================
// INIT
// ============================================================
initRows();
