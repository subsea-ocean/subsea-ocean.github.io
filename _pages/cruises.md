---
layout: page
title: Cruises
permalink: /cruises/
nav: true
nav_order: 2
---

<div style="text-align:center; margin-bottom:40px;">

<h1 style="margin-bottom:10px;">
  Cruises
</h1>

<p style="max-width:850px; margin:auto;">
  Explore SUBSEA field expeditions across the subtropical gyres.
</p>

</div>

<style>
.cruise-map-wrap {
  position: relative;
  max-width: 950px;
  margin: 40px auto;
}

.cruise-map-wrap img,
.cruise-track-map {
  width: 100%;
  display: block;
  border-radius: 0.5rem;
}

.gyre-hotspot {
  position: absolute;
  border: 4px dashed var(--global-theme-color);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.25s ease;
}

.gyre-hotspot:hover {
  background-color: rgba(0, 188, 212, 0.22);
}

.gyre-label {
  position: absolute;
  color: var(--global-theme-color);
  font-weight: 700;
  font-size: 1.2rem;
  pointer-events: none;
  text-align: center;
}

#northPacificHotspot {
  left: 31%;
  top: 22%;
  width: 23%;
  height: 24%;
}

#southAtlanticHotspot {
  left: 77%;
  top: 56%;
  width: 18%;
  height: 25%;
}

#northPacificLabel {
  left: 38%;
  top: 31%;
}

#southAtlanticLabel {
  left: 82%;
  top: 64%;
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
  display: block;
  text-align: center;
  background: rgba(255,255,255,0.72);
  color: #2b6f8a;
  padding: 14px 18px;
  margin: 14px 0;
  border-radius: 999px;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.25s ease;
}

.cruise-button:hover {
  background: var(--global-theme-color);
  color: white;
  text-decoration: none;
  transform: translateY(-2px);
}

.cruise-route {
  transition: all 0.25s ease;
}

@media (max-width: 768px) {
  .cruise-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="cruise-map-wrap">

  <img src="/assets/img/subtropical_gyres_map.png" alt="Map of subtropical ocean gyres">

  <div id="northPacificHotspot" class="gyre-hotspot" onclick="showGyre('northPacific')"></div>

  <div id="southAtlanticHotspot" class="gyre-hotspot" onclick="showGyre('southAtlantic')"></div>

  <div id="northPacificLabel" class="gyre-label">
    North<br>Pacific
  </div>

  <div id="southAtlanticLabel" class="gyre-label">
    South<br>Atlantic
  </div>

</div>

<!-- NORTH PACIFIC -->

<div id="northPacific" class="cruise-info">

  <h2 style="text-align:center;">
    North Pacific Subtropical Gyre
  </h2>

  <div class="cruise-grid">

    <div class="cruise-card">

      <h3>Cruises</h3>

      <a class="cruise-button" href="#" onmouseover="highlightTrack('hot356358')" onmouseout="resetTracks()">HOT Cruise 356</a>

      <a class="cruise-button" href="#" onmouseover="highlightTrack('hot356358')" onmouseout="resetTracks()">HOT Cruise 357</a>

      <a class="cruise-button" href="#" onmouseover="highlightTrack('hot356358')" onmouseout="resetTracks()">HOT Cruise 358</a>

      <a class="cruise-button" href="#" onmouseover="highlightTrack('hot359362')" onmouseout="resetTracks()">HOT Cruise 359</a>

      <a class="cruise-button" href="#" onmouseover="highlightTrack('hot359362')" onmouseout="resetTracks()">HOT Cruise 360</a>

      <a class="cruise-button" href="#" onmouseover="highlightTrack('hot359362')" onmouseout="resetTracks()">HOT Cruise 361</a>

      <a class="cruise-button" href="#" onmouseover="highlightTrack('hot359362')" onmouseout="resetTracks()">HOT Cruise 362</a>

    </div>

    <div class="cruise-card">

      <h3>Cruise Tracks</h3>

      <div style="position:relative;">

        <img
          src="/assets/img/cruises/north_pacific_base_map.png"
          alt="North Pacific HOT cruise map"
          class="cruise-track-map"
        >

        <svg viewBox="0 0 100 100"
             style="position:absolute; top:0; left:0; width:100%; height:100%;">

          <polyline
            id="hot356358"
            class="cruise-route"
            points="20,70 35,62 68,28 72,34 40,55 20,70"
            fill="none"
            stroke="white"
            stroke-width="1.5"
            stroke-dasharray="2,2"
          />

          <polyline
            id="hot359362"
            class="cruise-route"
            points="20,70 35,62 68,28 76,32 40,55 20,70"
            fill="none"
            stroke="white"
            stroke-width="1.5"
            stroke-dasharray="2,2"
          />

        </svg>

      </div>

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
         onmouseover="highlightTrack('southAtlanticFkt260303')"
         onmouseout="resetTracks()">
        Fkt260303: South Atlantic Cruise 1
      </a>

    </div>

    <div class="cruise-card">

      <h3>Cruise Tracks</h3>

      <div style="position:relative;">

        <img
          src="/assets/img/Fkt260303%20South%20Atlantic%20Cruise%201.png"
          alt="South Atlantic SUBSEA cruise map"
          class="cruise-track-map"
        >

        <svg viewBox="0 0 100 100"
             style="position:absolute; top:0; left:0; width:100%; height:100%;">

          <polyline
            id="southAtlanticFkt260303"
            class="cruise-route"
            points="20,65 38,78 40,63 50,62 65,60 72,45 80,35"
            fill="none"
            stroke="white"
            stroke-width="1.5"
            stroke-dasharray="2,2"
          />

        </svg>

      </div>

      <p style="font-size:0.9em; margin-top:0.75rem; text-align:center;">
        SUBSEA cruise tracks in the South Atlantic Subtropical Gyre.
      </p>

    </div>

  </div>

</div>

<script>
function showGyre(gyreId) {
  document.querySelectorAll('.cruise-info').forEach(function(section) {
    section.classList.remove('active');
  });

  document.getElementById(gyreId).classList.add('active');
}

function highlightTrack(trackId) {
  resetTracks();

  const track = document.getElementById(trackId);

  if (track) {
    track.style.stroke = "var(--global-theme-color)";
    track.style.strokeWidth = "3";
    track.style.strokeDasharray = "none";
    track.parentNode.appendChild(track);
  }
}

function resetTracks() {
  document.querySelectorAll("polyline.cruise-route").forEach(function(track) {
    track.style.stroke = "white";
    track.style.strokeWidth = "1.5";
    track.style.strokeDasharray = "2,2";
  });
}
</script>
