---
layout: page
title: Cruises
permalink: /cruises/
nav: true
nav_order: 2
---

<h1 style="text-align:center;">Cruises</h1>

<p style="text-align:center; max-width:850px; margin:auto;">
  Explore SUBSEA field expeditions across the subtropical gyres.
</p>

<style>
.cruise-map-wrap {
  position: relative;
  max-width: 950px;
  margin: 40px auto;
}

.cruise-map-wrap img {
  width: 100%;
  display: block;
  border-radius: 0.25rem;
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
  padding: 20px;
  border-radius: 0.5rem;
}

.cruise-track {
  width: 100%;
  border-radius: 0.5rem;
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

  <div id="northPacificLabel" class="gyre-label">North<br>Pacific</div>
  <div id="southAtlanticLabel" class="gyre-label">South<br>Atlantic</div>

</div>

<div id="northPacific" class="cruise-info">

  <h2 style="text-align:center;">North Pacific Subtropical Gyre</h2>

  <div class="cruise-grid">

    <div class="cruise-card">
      <h3>Cruises</h3>
      <p>North Pacific cruise pages will be added here.</p>
    </div>

    <div class="cruise-card">
      <h3>Cruise Track</h3>
      <p>Cruise track map coming soon.</p>
    </div>

  </div>

</div>

<div id="southAtlantic" class="cruise-info active">

  <h2 style="text-align:center;">South Atlantic Subtropical Gyre</h2>

  <div class="cruise-grid">

    <div class="cruise-card">
      <h3>Cruises</h3>

      <p>
        <a href="/subsea-part-1/">
          SUBSEA Cruise Fkt260303: Expedition in the South Atlantic
        </a>
      </p>

      <p>
        Future South Atlantic cruise pages will be added here.
      </p>
    </div>

    <div class="cruise-card">
      <h3>Cruise Track</h3>

      <a href="/assets/img/news/subsea_part1_track.png" target="_blank">
        <img 
          src="/assets/img/news/subsea_part1_track.png"
          alt="SUBSEA South Atlantic cruise track"
          class="cruise-track"
        >
      </a>
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
</script>
