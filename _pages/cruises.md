---
layout: page
title: Cruises
permalink: /cruises/
nav: true
nav_order: 2
---

<style>
.post-title {
  display: none;
}

.cruise-map-wrap {
  position: relative;
  max-width: 950px;
  margin: 40px auto;
}

.cruise-map-wrap img {
  width: 100%;
  display: block;
  border-radius: 0.5rem;
}

.gyre-hotspot {
  position: absolute;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.25s ease;
}

.gyre-hotspot:hover {
  background-color: rgba(0, 188, 212, 0.22);
}

#northPacificHotspot {
  left: 32%;
  top: 23%;
  width: 21%;
  height: 24%;
}

#southAtlanticHotspot {
  left: 78%;
  top: 57%;
  width: 15%;
  height: 27%;
}

.cruise-info {
  display: none;
  margin-top: 40px;
}

.cruise-info.active {
  display: block;
}

.cruise-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 30px;
  align-items: start;
}

.cruise-card {
  background: rgba(255,255,255,0.04);
  padding: 24px;
  border-radius: 0.5rem;
}

.cruise-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  background: white;
  color: #1f2a44;
  padding: 0;
  margin: 14px 0;
  border-radius: 999px;
  font-size: 1.15rem;
  font-weight: 600;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.25s ease;
  box-shadow: 0 4px 14px rgba(0,0,0,0.18);
  min-width: 520px;
}

.cruise-title {
  flex: 1;
  text-align: left;
  padding: 18px 30px;
  background: #787878;
  color: white;
  white-space: nowrap;
  font-weight: 700;
}

.cruise-learn-more {
  background: #a3a3a3;
  color: white;
  padding: 18px 30px;
  border-radius: 999px;
  white-space: nowrap;
  transition: all 0.25s ease;
  font-weight: 700;
}

.cruise-button:hover {
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(0,0,0,0.25);
}

.cruise-button:hover .cruise-title {
  background: var(--global-theme-color);
}

.cruise-button:hover .cruise-learn-more {
  background: var(--global-theme-color);
  color: white;
}

.leaflet-map {
  height: 420px;
  width: 100%;
  border-radius: 0.5rem;
}

@media (max-width: 768px) {
  .cruise-grid {
    grid-template-columns: 1fr;
  }

  .cruise-button {
    min-width: 100%;
  }

  .cruise-title {
    white-space: normal;
  }
}
</style>

<link 
  rel="stylesheet" 
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<div style="text-align:center; margin-bottom:40px;">

<h1 style="margin-bottom:10px;">
  Cruises
</h1>

<p style="max-width:850px; margin:auto;">
  Map of ocean gyres, with the North Pacific and South Atlantic subtropical gyres in white. SUBSEA partner institutions are marked in red.
  Click on the gyres to learn about SUBSEA field expeditions!
</p>

</div>

<div class="cruise-map-wrap">

  <img src="/assets/img/subtropical_gyres_map.png" alt="Map of subtropical ocean gyres">

  <div id="northPacificHotspot" class="gyre-hotspot" onclick="showGyre('northPacific')"></div>

  <div id="southAtlanticHotspot" class="gyre-hotspot" onclick="showGyre('southAtlantic')"></div>

</div>

<!-- NORTH PACIFIC -->

<div id="northPacific" class="cruise-info">

  <h2 style="text-align:center;">
    North Pacific Subtropical Gyre
  </h2>

  <div class="cruise-grid">

    <div class="cruise-card">

      <h3>Cruises</h3>

      <a class="cruise-button" href="/cruises/hot-356/" onmouseover="highlightNorthPacificTrack('hot356358')" onmouseout="resetNorthPacificTracks()">
        <span class="cruise-title">HOT Cruise 356</span>
        <span class="cruise-learn-more">Learn more</span>
      </a>

      <a class="cruise-button" href="/cruises/hot-357/" onmouseover="highlightNorthPacificTrack('hot356358')" onmouseout="resetNorthPacificTracks()">
        <span class="cruise-title">HOT Cruise 357</span>
        <span class="cruise-learn-more">Learn more</span>
      </a>

      <a class="cruise-button" href="/cruises/hot-358/" onmouseover="highlightNorthPacificTrack('hot356358')" onmouseout="resetNorthPacificTracks()">
        <span class="cruise-title">HOT Cruise 358</span>
        <span class="cruise-learn-more">Learn more</span>
      </a>

      <a class="cruise-button" href="/cruises/hot-359/" onmouseover="highlightNorthPacificTrack('hot359362')" onmouseout="resetNorthPacificTracks()">
        <span class="cruise-title">HOT Cruise 359</span>
        <span class="cruise-learn-more">Learn more</span>
      </a>

      <a class="cruise-button" href="/cruises/hot-360/" onmouseover="highlightNorthPacificTrack('hot359362')" onmouseout="resetNorthPacificTracks()">
        <span class="cruise-title">HOT Cruise 360</span>
        <span class="cruise-learn-more">Learn more</span>
      </a>

      <a class="cruise-button" href="/cruises/hot-361/" onmouseover="highlightNorthPacificTrack('hot359362')" onmouseout="resetNorthPacificTracks()">
        <span class="cruise-title">HOT Cruise 361</span>
        <span class="cruise-learn-more">Learn more</span>
      </a>

      <a class="cruise-button" href="/cruises/hot-362/" onmouseover="highlightNorthPacificTrack('hot359362')" onmouseout="resetNorthPacificTracks()">
        <span class="cruise-title">HOT Cruise 362</span>
        <span class="cruise-learn-more">Learn more</span>
      </a>

    </div>

    <div class="cruise-card">

      <h3>Cruise Tracks</h3>

      <div id="northPacificMap" class="leaflet-map"></div>

      <p style="font-size:0.9em; margin-top:0.75rem; text-align:center;">
        Representative HOT cruise tracks in the North Pacific Subtropical Gyre.
      </p>

    </div>

  </div>

</div>

<!-- SOUTH ATLANTIC -->

<div id="southAtlantic" class="cruise-info active">

  <h2 style="text-align:center;">
    South Atlantic Subtropical Gyre
  </h2>

  <div class="cruise-grid">

    <div class="cruise-card">

      <h3>Cruises</h3>

      <a class="cruise-button"
         href="/subsea-part-1/"
         onmouseover="highlightSouthAtlanticTrack()"
         onmouseout="resetSouthAtlanticTrack()">

        <span class="cruise-title">
          Fkt260303: South Atlantic Cruise 1
        </span>

        <span class="cruise-learn-more">
          Learn more
        </span>

      </a>

    </div>

    <div class="cruise-card">

      <h3>Cruise Tracks</h3>

      <div id="southAtlanticMap" class="leaflet-map"></div>

      <p style="font-size:0.9em; margin-top:0.75rem; text-align:center;">
        SUBSEA cruise tracks in the South Atlantic Subtropical Gyre.
      </p>

    </div>

  </div>

</div>

<script>
let southAtlanticMap;
let southAtlanticTrack;

let northPacificMap;
let hot356358Track;
let hot359362Track;

function themeColor() {
  return getComputedStyle(document.documentElement)
    .getPropertyValue("--global-theme-color")
    .trim();
}

function addBaseLayer(map) {
  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 8,
      attribution: "&copy; OpenStreetMap contributors"
    }
  ).addTo(map);
}

function showGyre(gyreId) {
  document.querySelectorAll('.cruise-info').forEach(function(section) {
    section.classList.remove('active');
  });

  document.getElementById(gyreId).classList.add('active');

  if (gyreId === "northPacific") {
    initNorthPacificMap();

    setTimeout(function() {
      northPacificMap.invalidateSize();
    }, 150);
  }

  if (gyreId === "southAtlantic") {
    initSouthAtlanticMap();

    setTimeout(function() {
      southAtlanticMap.invalidateSize();
    }, 150);
  }
}

/* SOUTH ATLANTIC */

function initSouthAtlanticMap() {
  if (southAtlanticMap) return;

  const fkt260303Coords = [
    [-22.891312, -43.190369],
    [-26.227144, -37.706217],
    [-23.799483, -37.299183],
    [-22.891312, -43.190369],
    [-25.731641, -38.662314],
    [-26.031828, -37.798844],
    [-25.541122, -33.283535],
    [-25.225968, -30.270903],
    [-25.100000, -28.600000],
    [-23.930618, -27.467479],
    [-21.963639, -25.095520],
    [-18.000000, -25.100000],
    [-17.437127, -26.713943],
    [-16.475592, -29.535370],
    [-12.969100, -38.511900]
  ];

  southAtlanticMap = L.map("southAtlanticMap", {
    scrollWheelZoom: false
  }).setView([-22, -33], 4);

  addBaseLayer(southAtlanticMap);

  southAtlanticTrack = L.polyline(fkt260303Coords, {
    color: "white",
    weight: 3,
    dashArray: "6,6",
    opacity: 0.95
  }).addTo(southAtlanticMap);

  southAtlanticMap.fitBounds(
    southAtlanticTrack.getBounds(),
    {
      padding: [25, 25]
    }
  );
}

function highlightSouthAtlanticTrack() {
  initSouthAtlanticMap();

  southAtlanticTrack.setStyle({
    color: themeColor(),
    weight: 5,
    dashArray: null,
    opacity: 1
  });

  southAtlanticTrack.bringToFront();
}

function resetSouthAtlanticTrack() {
  if (!southAtlanticTrack) return;

  southAtlanticTrack.setStyle({
    color: "white",
    weight: 3,
    dashArray: "6,6",
    opacity: 0.95
  });
}

/* NORTH PACIFIC */

function initNorthPacificMap() {
  if (northPacificMap) return;

  const hot356358Coords = [
    [21.3069, -157.8583],
    [21.3433, -158.2733],
    [22.7500, -158.0000],
    [22.6680, -157.9502],
    [21.8467, -158.3633],
    [21.3069, -157.8583]
  ];

  const hot359362Coords = [
    [21.3069, -157.8583],
    [21.3433, -158.2733],
    [22.7500, -158.0000],
    [22.7665, -157.9009],
    [21.8467, -158.3633],
    [21.3069, -157.8583]
  ];

  northPacificMap = L.map("northPacificMap", {
    scrollWheelZoom: false
  }).setView([22.1, -158.1], 8);

  addBaseLayer(northPacificMap);

  hot356358Track = L.polyline(hot356358Coords, {
    color: "white",
    weight: 3,
    dashArray: "6,6",
    opacity: 0.95
  }).addTo(northPacificMap);

  hot359362Track = L.polyline(hot359362Coords, {
    color: "white",
    weight: 3,
    dashArray: "6,6",
    opacity: 0.95
  }).addTo(northPacificMap);

  const group = L.featureGroup([
    hot356358Track,
    hot359362Track
  ]);

  northPacificMap.fitBounds(
    group.getBounds(),
    {
      padding: [25, 25]
    }
  );
}

function highlightNorthPacificTrack(trackId) {
  initNorthPacificMap();

  resetNorthPacificTracks();

  let track = null;

  if (trackId === "hot356358") {
    track = hot356358Track;
  }

  if (trackId === "hot359362") {
    track = hot359362Track;
  }

  if (track) {
    track.setStyle({
      color: themeColor(),
      weight: 5,
      dashArray: null,
      opacity: 1
    });

    track.bringToFront();
  }
}

function resetNorthPacificTracks() {
  [hot356358Track, hot359362Track].forEach(function(track) {
    if (!track) return;

    track.setStyle({
      color: "white",
      weight: 3,
      dashArray: "6,6",
      opacity: 0.95
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  initSouthAtlanticMap();
});
</script>
