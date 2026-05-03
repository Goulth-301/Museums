/* =============================================
   MUZEA ŚLĄSKA — map.js
   ============================================= */


// =============================================
// 1. MUSEUM DATA
// =============================================
const museums = [
  { id: 1, name: "Silesian Museum", city: "Katowice", category: "History & Art", rating: 4.6, hours: "Tue–Sun 10:00–20:00, Mon closed", address: "ul. T. Dobrowolskiego 1, 40-205 Katowice", phone: "+48 32 779 93 00", lat: 50.2638049, lng: 19.0326475, photo: "/museums_pictures/id_01.jpeg" },

  { id: 2, name: "Wilson Shaft Gallery", city: "Katowice", category: "Art", rating: 4.5, hours: "Everyday 09:00–19:00", address: "ul. Oswobodzenia 1, 40-403 Katowice", phone: "+48 32 730 32 20", lat: 50.2510817, lng: 19.0812245, photo: "/museums_pictures/id_02.jpg" },

  { id: 3, name: "Katowice History Museum (Main Building)", city: "Katowice", category: "History", rating: 4.7, hours: "Tue–Fri 10:00–18:00, Sat 10:00–16:00, Sun 11:00–15:00, Mon closed", address: "ul. Ks. J. Szafranka 9, 40-025 Katowice", phone: "+48 32 256 18 10", lat: 50.255337, lng: 19.0258881, photo: "/museums_pictures/id_03.jpg" },

  { id: 4, name: "Katowice History Museum (City Ethnology Department)", city: "Katowice", category: "History & Art", rating: 4.6, hours: "Tue–Fri 10:00–18:00, Sat 10:00–16:00, Sun 11:00–15:00, Mon closed", address: "ul. Rymarska 4, 40-425 Katowice", phone: "+48 32 353 95 59", lat: 50.2442527, lng: 19.0793846, photo: "/museums_pictures/id_04.jpg" },

  { id: 5, name: "Katowice History Museum (Theatre and Film Department)", city: "Katowice", category: "History", rating: 4.6, hours: "Tue 11:00–16:00, Wed–Fri 11:00–15:00, Mon/Sat/Sun closed", address: "ul. M. Kopernika 11, 40-064 Katowice", phone: "+48 32 745 17 28", lat: 50.2549214, lng: 19.012874, photo: "/museums_pictures/id_05.jpg" },

  { id: 6, name: "Katowice History Museum (Saint Michael the Archangel Church)", city: "Katowice", category: "History & Art, Religious", rating: 4.6, hours: "Area: daily; Interior: during services", address: "Park im. T. Kościuszki, ul. Kościuszki 87, 40-523 Katowice", phone: "+48 506 546 379", lat: 50.2447685, lng: 19.0010114, photo: "/museums_pictures/id_06.jpg" },

  { id: 7, name: "Energy Museum", city: "Łaziska Górne", category: "Industrial", rating: 4.7, hours: "Everyday 14:00–18:00", address: "Wyzwolenia 30, 43-170 Łaziska Górne", phone: "+48 603 155 562", lat: 50.1340794, lng: 18.8459889, photo: "/museums_pictures/id_07.jpg" },

  { id: 8, name: "Coal Mining Museum", city: "Zabrze", category: "Industrial", rating: 4.4, hours: "Mon–Sun 09:00–18:00", address: "Multiple locations in Zabrze", phone: "+48 32 271 40 77", lat: 50.2875629, lng: 18.7786444, photo: "/museums_pictures/id_08.jpg" },

  { id: 9, name: "Castle Museum", city: "Pszczyna", category: "Historic museum", rating: 4.8, hours: "Tue 10:00–15:00, Wed–Fri 09:00–16:00, Sat–Sun 10:00–17:00, Mon closed", address: "ul. Brama Wybrańców 1, 43-200 Pszczyna", phone: "+48 32 210 30 37", lat: 49.978181, lng: 18.9378539, photo: "/museums_pictures/id_09.jpg" },

  { id: 10, name: "Museum of Technology and Contemporary Folk Culture (Carbonarium)", city: "Jastrzębie-Zdrój", category: "Industrial museum", rating: 4.4, hours: "Tue 10:00–18:00, Wed/Fri 08:00–16:00, Sat–Sun 11:00–19:00, Mon closed", address: "Towarowa 7, 44-338 Jastrzębie-Zdrój", phone: "+48 32 440 81 77", lat: 49.9425001, lng: 18.5631902, photo: "/museums_pictures/id_10.jpg" },

  { id: 11, name: "BWA Contemporary Art Gallery", city: "Katowice", category: "Art", rating: 3.9, hours: "Tue–Sun 10:00–18:00", address: "al. Wojciecha Korfantego 6, 40-004 Katowice", phone: "+48 32 259 90 40", lat: 50.2623085, lng: 19.0194855, photo: "/museums_pictures/id_11.jpg" },

  { id: 12, name: "Zinc Metallurgy Museum", city: "Katowice", category: "Industrial", rating: 4.7, hours: "Tue–Sun 10:00–18:00, Mon closed", address: "ul. 11 Listopada 50, 40-387 Katowice", phone: "+48 727 600 186", lat: 50.2635451, lng: 19.079129, photo: "/museums_pictures/id_12.jpg" },

  { id: 13, name: "Schoen Palace Museum", city: "Sosnowiec", category: "Art, Historic museum", rating: 4.6, hours: "Tue–Sat 10:00–19:00, Sun 10:00–18:00, Mon closed", address: "ul. Chemiczna 12, 41-205 Sosnowiec", phone: "+48 32 363 45 10", lat: 50.2955725, lng: 19.1387883, photo: "/museums_pictures/id_13.jpg" },

  { id: 14, name: "Sztygarka Museum", city: "Dąbrowa Górnicza", category: "Historic museum", rating: 4.6, hours: "Tue–Wed 09:00–15:00, Thu 09:00–19:00, Fri 09:00–13:00, Sat 09:00–15:00, Sun 11:45–16:00", address: "Legionów Polskich 69, 41-300 Dąbrowa Górnicza", phone: "+48 32 262 36 95", lat: 50.317742, lng: 19.1812933, photo: "/museums_pictures/id_14.jpeg" },

  { id: 15, name: "Museum of Polish People’s Republic", city: "Ruda Śląska", category: "Historic museum", rating: 4.6, hours: "Wed–Sun 10:00–18:00", address: "ul. Zajęcza 42, 41-711 Ruda Śląska", phone: "+48 32 700 70 49", lat: 50.2868635, lng: 18.8304725, photo: "/museums_pictures/id_15.jpg" },

  { id: 16, name: "Saturn Museum", city: "Czeladź", category: "Industrial", rating: 4.6, hours: "Tue–Sun (seasonal hours), Mon closed", address: "Dehnelów 43, 41-250 Czeladź", phone: "+48 32 265 42 93", lat: 50.308739, lng: 19.0608571, photo: "/museums_pictures/id_16.jpg" },

  { id: 17, name: "Będzin Castle", city: "Będzin", category: "Historic museum", rating: 4.6, hours: "Seasonal hours", address: "ul. Gzichowska 15, 42-500 Będzin", phone: "+48 32 267 77 07", lat: 50.328803, lng: 19.1228957, photo: "/museums_pictures/id_17.jpg" },

  { id: 18, name: "Częstochowa Museum", city: "Częstochowa", category: "Historic museum", rating: 4.6, hours: "Tue–Fri 09:00–15:30, Wed 11:00–17:30, Sat–Sun 11:00–17:00, Mon closed", address: "Aleja Najświętszej Maryi Panny 45, 42-217 Częstochowa", phone: "+48 34 360 56 31", lat: 50.8113278, lng: 19.1109261, photo: "/museums_pictures/id_18.jpg" },

  { id: 19, name: "Brewery Museum", city: "Żywiec", category: "Historic museum, Experience", rating: 4.6, hours: "Tue–Sun 09:00–17:00, Mon closed", address: "Browarna 88, 34-300 Żywiec", phone: "+48 33 861 24 57", lat: 49.6628622, lng: 19.1724622, photo: "/museums_pictures/id_19.jpg" },

  { id: 20, name: "Fire Museum", city: "Żory", category: "Industrial, Experience", rating: 4.3, hours: "Tue/Wed/Fri 08:30–16:00, Thu 08:30–18:00, Sat–Sun 10:00–17:00", address: "Katowicka 3, 44-240 Żory", phone: "+48 32 307 27 98", lat: 50.0441231, lng: 18.6967855, photo: "/museums_pictures/id_20.jpg" },

  { id: 21, name: "Upper Silesian Museum", city: "Bytom", category: "Historic museum", rating: 4.7, hours: "Tue 09:00–15:00, Wed–Thu 12:00–18:00, Fri 09:00–15:00, Sat 11:00–16:00, Sun 12:00–17:00, Mon closed", address: "Wojciecha Korfantego 34, 41-902 Bytom", phone: "+48 32 281 97 33", lat: 50.3490765, lng: 18.9240147, photo: "/museums_pictures/id_21.jpg" },

  { id: 22, name: "Gliwice Museum", city: "Gliwice", category: "Historic museum", rating: 4.7, hours: "Tue 11:00–16:00, Wed–Thu 11:00–18:00, Fri 11:00–16:00, Sat–Sun 10:00–17:00, Mon closed", address: "Dolnych Wałów 8A, 44-100 Gliwice", phone: "+48 32 231 08 54", lat: 50.2954552, lng: 18.664746, photo: "/museums_pictures/id_22.jpg" },

  { id: 23, name: "Gliwice Radio Station", city: "Gliwice", category: "Industrial, Historical Object", rating: 4.8, hours: "Tue 11:00–16:00, Wed–Thu 11:00–18:00, Fri 11:00–16:00, Sat–Sun 10:00–17:00, Mon closed", address: "Tarnogórska 129, 44-102 Gliwice", phone: "+48 32 300 04 04", lat: 50.3127197, lng: 18.6877172, photo: "/museums_pictures/id_23.jpg" },

  { id: 24, name: "Jaworzno Museum", city: "Jaworzno", category: "Historic museum", rating: 4.6, hours: "Tue–Fri 09:00–16:00, Last Sat 09:00–13:00, Sun/Mon closed", address: "Pocztowa 5, 43-600 Jaworzno", phone: "+48 32 618 19 50", lat: 50.2022327, lng: 19.2732728, photo: "/museums_pictures/id_24.jpg" },

  { id: 25, name: "City Museum in Zabrze", city: "Zabrze", category: "Historic museum", rating: 2.6, hours: "Tue/Wed/Fri 09:00–16:00, Thu 09:00–18:00, Sat–Sun 10:00–14:00", address: "Powstańców Śląskich 3, 41-800 Zabrze", phone: "+48 32 271 56 89", lat: 50.30805, lng: 18.7827268, photo: "/museums_pictures/id_25.jpg" },

  { id: 26, name: "Mountain Museum", city: "Szczyrk", category: "Historic museum", rating: 4.9, hours: "Sat–Sun 10:00–13:00", address: "Wypoczynkowa 5, 43-370 Szczyrk", phone: "+48 602 737 283", lat: 49.7171603, lng: 19.033025, photo: "/museums_pictures/id_26.jpg" },

  { id: 27, name: "Racibórz City Museum", city: "Racibórz", category: "Ethnography", rating: 4.6, hours: "Tue–Fri 08:00–16:00, Sat 10:00–18:00, Sun 11:00–15:00, Mon closed", address: "Rzeźnicza 15, 47-400 Racibórz", phone: "+48 32 415 49 01", lat: 50.0927521, lng: 18.2150632, photo: "/museums_pictures/id_27.jpg" },

  { id: 28, name: "Zygmunt Krasiński Regional Museum", city: "Złoty Potok", category: "Ethnography", rating: 4.2, hours: "Mon–Fri 09:00–14:00, Weekend closed", address: "Kościuszki 11, 42-253 Złoty Potok", phone: "+48 34 329 11 62", lat: 50.7143423, lng: 19.4368099, photo: "/museums_pictures/id_28.jpg" },

  { id: 29, name: "Edyta Stein Museum", city: "Lubliniec", category: "Ethnography", rating: 4.2, hours: "Mon/Wed 08:00–16:00, Tue/Thu 10:00–18:00, Sun 09:00–17:00", address: "Edyty Stein 2, 42-700 Lubliniec", phone: "+48 534 200 582", lat: 50.6693646, lng: 18.6804261, photo: "/museums_pictures/id_29.jpg" },

  { id: 30, name: "Zofia Kossak-Szatkowska Museum", city: "Górki Wielkie", category: "Historic museum", rating: 4.7, hours: "Tue/Thu/Fri/Sat 09:00–15:00, Wed 09:00–16:00, Sun 10:00–14:00, Mon closed", address: "Stary Dwór 2, 43-436 Górki Wielkie", phone: "+48 33 812 95 25", lat: 49.7820948, lng: 18.8245303, photo: "/museums_pictures/id_30.jpg" },

  { id: 31, name: "Bread, School and Curiosities Museum", city: "Radzionków", category: "Historic museum", rating: 4.6, hours: "By booking / scheduled groups", address: "Z. Nałkowskiej 5, 41-922 Radzionków", phone: "+48 32 387 17 60", lat: 50.3823842, lng: 18.8989158, photo: "/museums_pictures/id_31.jpg" },

  { id: 32, name: "Mysłowice City Museum", city: "Mysłowice", category: "Historic museum", rating: 4.7, hours: "Seasonal hours, generally Tue–Sun", address: "Stadionowa 7A, 41-400 Mysłowice", phone: "+48 32 222 13 18", lat: 50.2275342, lng: 19.142421, photo: "/museums_pictures/id_32.jpg" },

  { id: 33, name: "Museum of Marine and Inland Fauna and Flora", city: "Jaworze Średnie", category: "Science", rating: 4.7, hours: "Tue–Fri 09:00–15:00, Sat–Sun 13:00–18:00, Mon limited", address: "Wapienicka 120, 43-384 Jaworze", phone: "+48 33 817 22 17", lat: 49.7930527, lng: 18.9676711, photo: "/museums_pictures/id_33.jpg" }

];


// =============================================
// 2. CATEGORY COLORS
// =============================================
const catColors = {
  "History": "#B8935A",
  "History & Art": "#C17F3E",
  "Art": "#8B6DB0",
  "Art gallery": "#9B7DC0",
  "Industrial": "#6B8FA8",
  "Industrial museum": "#5B7F98",
  "Science": "#5A9E6E",
  "Ethnography": "#B06B6B",
  "Museum": "#B8935A",
  "Local history museum": "#C17F3E",
  "Technology museum": "#6B8FA8",
  "Historic museum": "#8B7040"
};

function getColor(category) {
  return catColors[category] || "#B8935A";
}


// =============================================
// 3. STAR RATING RENDERER
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
// 4. POPUP HTML BUILDER
// =============================================
function buildPopup(museum) {
  const color = getColor(museum.category);

  const photoHTML = museum.photo
    ? `<img class="popup-photo" src="${museum.photo}" alt="${museum.name}"
           onerror="this.style.display='none';this.nextSibling.style.display='flex'">`
    : '';

  const placeholderHTML = `
    <div class="popup-photo-placeholder" ${museum.photo ? 'style="display:none"' : ''}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B8935A" stroke-width="1">
        <rect x="3" y="3" width="18" height="18" rx="1"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    </div>`;

  return `
    <div class="popup-card">
      ${photoHTML}
      ${placeholderHTML}
      <div class="popup-body">
        <div class="popup-category" style="color:${color}">${museum.category}</div>
        <div class="popup-name">${museum.name}</div>
        <div class="popup-rating">
          <span class="stars">${renderStars(museum.rating)}</span>
          <span class="rating-num">${museum.rating}</span>
        </div>
        <div class="popup-divider"></div>
        <div class="popup-meta">
          <div class="popup-meta-row">
            <span class="popup-meta-icon">⏰</span>
            <span>${museum.hours}</span>
          </div>
          <div class="popup-meta-row">
            <span class="popup-meta-icon">📍</span>
            <span>${museum.address}</span>
          </div>
          <div class="popup-meta-row">
            <span class="popup-meta-icon">📞</span>
            <span>${museum.phone}</span>
          </div>
        </div>
        <div class="popup-divider"></div>
        <button class="popup-btn">
          Zobacz szczegóły / View details
        </button>
      </div>
    </div>`;
}


// =============================================
// 5. PIN ICON CREATOR — SVG local con color
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

  // Reemplaza el tamaño y el color del SVG
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
// 6. MAP INITIALIZATION  ← esta sección faltaba!
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
// 7. SILESIA MASK
// =============================================
fetch('silesia.geojson')
  .then(res => res.json())
  .then(data => {
    const coords1 = data.features[0].geometry.coordinates
      .map(([lng, lat]) => [lat, lng]);
    const coords2 = data.features[1].geometry.coordinates
      .map(([lng, lat]) => [lat, lng]);

    const silesiaCoords = [...coords1, ...coords2.reverse()];
    const world = [[-90, -180], [-90, 180], [90, 180], [90, -180]];

    L.polygon([world, silesiaCoords], {
      color: 'none',
      fillColor: '#2b2e0d',
      fillOpacity: 0.80
    }).addTo(map);

    L.polyline(silesiaCoords, {
      color: '#B8935A',
      weight: 2,
      opacity: 0.9,
      dashArray: '6, 4'
    }).addTo(map);
  })
  .catch(err => console.warn('Error loading silesia.geojson:', err));


// =============================================
// 8. ADD MARKERS TO MAP
// =============================================
let markerList = [];

async function addMarkers(data) {
  markerList.forEach(m => map.removeLayer(m));
  markerList = [];

  for (const museum of data) {
    const color = getColor(museum.category);
    const icon = await createPinIcon(color);

    const marker = L.marker([museum.lat, museum.lng], { icon })
      .addTo(map)
      .bindPopup(buildPopup(museum), {
        maxWidth: 280,
        minWidth: 280,
        closeButton: true
      });

    marker.on('mouseover', function () { this.openPopup(); });
    markerList.push(marker);
  }

  document.getElementById('visibleCount').textContent = data.length;
}

addMarkers(museums);


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
    ? museums
    : museums.filter(m => m.category === selectedCategory || m.category.includes(selectedCategory));

  await addMarkers(filtered);
});


// =============================================
// 10. LEGEND
// =============================================
const legendEl = document.createElement('div');
legendEl.className = 'map-legend';
legendEl.innerHTML = `
  <div class="legend-title">Kategorie / Categories</div>
  ${Object.entries(catColors).map(([cat, color]) => `
    <div class="legend-item">
      <div class="legend-dot" style="background:${color}"></div>
      <span>${cat}</span>
    </div>
  `).join('')}
`;
document.getElementById('map').appendChild(legendEl);


// =============================================
// 11. API CONNECTION
//     Uncomment when backend is ready!
// =============================================
// async function loadFromAPI() {
//   try {
//     const response = await fetch('http://localhost:3000/museums');
//     const data     = await response.json();
//     addMarkers(data);
//   } catch (error) {
//     console.log('API not available, using local data');
//   }
// }
// loadFromAPI();