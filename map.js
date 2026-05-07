/* =============================================
   MUZEA ŚLĄSKA — map.js
   Data loaded from Firebase Firestore
   ============================================= */

import { initializeApp }  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqxu8_hC5cw_-p4mufOuxCOC8ZpEgROHI",
  authDomain: "museums-wsb.firebaseapp.com",
  projectId: "museums-wsb",
  storageBucket: "museums-wsb.firebasestorage.app",
  messagingSenderId: "560360740833",
  appId: "1:560360740833:web:6dfe7cb23bf94ee49a64a0"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// =============================================
// 1. CATEGORY COLORS
// =============================================
const catColors = {
  "History":             "#B8935A",
  "History & Art":       "#C17F3E",
  "Art":                 "#8B6DB0",
  "Art gallery":         "#9B7DC0",
  "Industrial":          "#6B8FA8",
  "Industrial museum":   "#5B7F98",
  "Science":             "#5A9E6E",
  "Ethnography":         "#B06B6B",
  "Museum":              "#B8935A",
  "Local history museum":"#C17F3E",
  "Technology museum":   "#6B8FA8",
  "Historic museum":     "#8B7040"
};

function getColor(category) {
  if (!category) return "#B8935A";
  for (const key of Object.keys(catColors)) {
    if (category.includes(key)) return catColors[key];
  }
  return "#B8935A";
}

// =============================================
// 2. STAR RATING RENDERER
// =============================================
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= full) stars += '★';
    else if (i === full + 1 && half) stars += '½';
    else stars += '☆';
  }
  return stars;
}

// =============================================
// 3. POPUP HTML BUILDER
// =============================================
function buildPopup(museum, docId) {
  const color = getColor(museum.category);
  const photo = museum.photoURL || `museums_pictures/${docId}.jpg`;

  return `
    <div class="popup-card">
      <img class="popup-photo" src="${photo}" alt="${museum.name}"
           onerror="this.style.display='none';this.nextSibling.style.display='flex'">
      <div class="popup-photo-placeholder" style="display:none">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B8935A" stroke-width="1">
          <rect x="3" y="3" width="18" height="18" rx="1"/>
          <path d="M3 9h18M9 21V9"/>
        </svg>
      </div>
      <div class="popup-body">
        <div class="popup-category" style="color:${color}">${museum.category || ''}</div>
        <div class="popup-name">${museum.name}</div>
        <div class="popup-rating">
          <span class="stars">${renderStars(museum.rating)}</span>
          <span class="rating-num">${museum.rating}</span>
        </div>
        <div class="popup-divider"></div>
        <div class="popup-meta">
          <div class="popup-meta-row">
            <span class="popup-meta-icon">⏰</span>
            <span>${museum.hours || ''}</span>
          </div>
          <div class="popup-meta-row">
            <span class="popup-meta-icon">📍</span>
            <span>${museum.address || ''}</span>
          </div>
          <div class="popup-meta-row">
            <span class="popup-meta-icon">📞</span>
            <span>${museum.phone || ''}</span>
          </div>
        </div>
        <div class="popup-divider"></div>
        <a href="museum.html?id=${docId}" class="popup-btn">
          View details →
        </a>
      </div>
    </div>`;
}

// =============================================
// 4. PIN ICON CREATOR
// =============================================
let cachedSVG = null;

async function loadSVG() {
  if (cachedSVG) return cachedSVG;
  const response = await fetch('icons/pin.svg');
  cachedSVG = await response.text();
  return cachedSVG;
}

async function createPinIcon(color) {
  const svgText = await loadSVG();
  const colored = svgText
    .replace(/width="[^"]*"/, 'width="32"')
    .replace(/height="[^"]*"/, 'height="44"')
    .replace(/fill="#[^"]*"/g, `fill="${color}"`);

  return L.divIcon({
    html: `<div style="width:32px;height:44px;overflow:visible;">${colored}</div>`,
    className: '',
    iconSize: [32, 44],
    iconAnchor: [16, 44],
    popupAnchor: [0, -44]
  });
}

// =============================================
// 5. MAP INITIALIZATION
// =============================================
const map = L.map('map', {
  center: [50.27, 18.92],
  zoom: 10,
  minZoom: 9,
  maxZoom: 14,
  maxBounds: [
    [49.30, 17.30],
    [51.20, 20.10]
  ]
});

L.control.zoom({ position: 'topright' }).addTo(map);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap © CARTO',
  maxZoom: 19
}).addTo(map);

// =============================================
// 6. SILESIA MASK
// =============================================
fetch('silesia.geojson')
  .then(res => res.json())
  .then(data => {
    const coords1 = data.features[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    const coords2 = data.features[1].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    const silesiaCoords = [...coords1, ...coords2.reverse()];
    const world = [[-90, -180], [-90, 180], [90, 180], [90, -180]];

    L.polygon([world, silesiaCoords], {
      color: 'none', fillColor: '#2b2e0d', fillOpacity: 0.80
    }).addTo(map);

    L.polyline(silesiaCoords, {
      color: '#B8935A', weight: 2, opacity: 0.9, dashArray: '6, 4'
    }).addTo(map);
  })
  .catch(err => console.warn('Error loading silesia.geojson:', err));

// =============================================
// 7. ADD MARKERS TO MAP
// =============================================
let markerList = [];
let allMuseums = []; // cache de todos los museos

async function addMarkers(data) {
  markerList.forEach(m => map.removeLayer(m));
  markerList = [];

  for (const { docId, museum } of data) {
    const color = getColor(museum.category);
    const icon = await createPinIcon(color);

    const marker = L.marker([museum.lat, museum.lng], { icon })
      .addTo(map)
      .bindPopup(buildPopup(museum, docId), {
        maxWidth: 280,
        minWidth: 280,
        closeButton: true
      });

    marker.on('mouseover', function () { this.openPopup(); });
    markerList.push(marker);
  }

  document.getElementById('visibleCount').textContent = data.length;
}

// =============================================
// 8. LOAD MUSEUMS FROM FIRESTORE
// =============================================
async function loadMuseums() {
  try {
    const snapshot = await getDocs(collection(db, "museums"));
    allMuseums = snapshot.docs.map(doc => ({
      docId: doc.id,
      museum: doc.data()
    }));

    await addMarkers(allMuseums);
    renderLegend();

  } catch (err) {
    console.error('Error loading museums from Firestore:', err);
  }
}

// =============================================
// 9. FILTER BUTTONS
// =============================================
document.getElementById('filters').addEventListener('click', async e => {
  const btn = e.target.closest('.pill');
  if (!btn) return;

  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');

  const selectedCategory = btn.dataset.cat;

  const filtered = selectedCategory === 'all'
    ? allMuseums
    : allMuseums.filter(({ museum }) =>
        museum.category && museum.category.includes(selectedCategory)
      );

  await addMarkers(filtered);
});

// =============================================
// 10. LEGEND
// =============================================
function renderLegend() {
  const legendEl = document.createElement('div');
  legendEl.className = 'map-legend';
  legendEl.innerHTML = `
    <div class="legend-title">Categories</div>
    ${Object.entries(catColors).map(([cat, color]) => `
      <div class="legend-item">
        <div class="legend-dot" style="background:${color}"></div>
        <span>${cat}</span>
      </div>
    `).join('')}
  `;
  document.getElementById('map').appendChild(legendEl);
}

// =============================================
// 11. START
// =============================================
loadMuseums();
