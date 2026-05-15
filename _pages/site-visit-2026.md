---
layout: page
title: 2026 Site Visit
permalink: /site-visit-2026/
nav: false
---

<style>
.post-title {
  display: none;
}
</style>

<div style="margin-bottom:50px;">

  <img
    src="/assets/church2026_thumbnailnew.pdf.png"
    alt="2026 SUBSEA Site Visit"
    style="
      width:100%;
      border-radius:0.5rem;
      display:block;
    "
  >

</div>

## Details

**Meeting Dates:** Thursday, September 24 & Friday, September 25, 2026  
**Location:** Flathead Lake Biological Station, Polson, Montana, USA

Lodging and catered meals will be available at FLBS.

Lodging is available the nights of **September 23–25**.  
Meals will be available from **breakfast on September 24 through breakfast on September 26**.

---

## RSVP

Please complete the RSVP and travel information form below.

<div style="text-align:center; margin:30px 0;">
  <a 
    href="https://docs.google.com/forms/d/e/1FAIpQLSdwxgCW0sYzit_EsiMuxD2kKhsGB5J33SwKWwoFzjsed5OIyQ/viewform?usp=publish-editor" 
    target="_blank"
    style="
      display:inline-block;
      background:var(--global-theme-color);
      color:white;
      padding:14px 34px;
      border-radius:999px;
      font-size:1.15rem;
      text-decoration:none;
      font-weight:600;
    ">
    RSVP
  </a>
</div>

---

## Schedule

<p style="text-align:center; font-size:1.1rem; margin-top:25px; margin-bottom:40px;">
  The workshop schedule is currently being finalized and will be provided to participants prior to the meeting.
</p>

---

## Getting to FLBS

The closest airport is **Glacier Park International Airport (FCA)** in Kalispell, Montana. We will coordinate shuttles to pick participants up from the airport and bring them to the Flathead Lake Biological Station.

Please include your arrival and departure details in the RSVP form so we can coordinate transportation.

---

## Flathead Lake Biological Station Map

<div style="text-align:center; margin:30px 0;">

  <div style="margin-bottom:15px;">
    <button onclick="zoomMap(1.2)">Zoom In</button>
    <button onclick="zoomMap(0.8)">Zoom Out</button>
    <button onclick="resetMapZoom()">Reset</button>
  </div>

  <div style="
    overflow:hidden;
    max-width:100%;
    border-radius:0.5rem;
    border:1px solid rgba(255,255,255,0.15);
  ">
    <img
      id="flbsMap"
      src="/assets/flbs-grounds-map-may-2021%20(1).pdf.png"
      alt="Flathead Lake Biological Station grounds map"
      style="
        width:100%;
        transform:scale(1);
        transform-origin:center center;
        transition:transform 0.25s ease;
      "
    >
  </div>

### Map

<div class="map-zoom-section">
  <div class="map-controls">
    <button onclick="zoomMap(1.2)">+</button>
    <button onclick="zoomMap(0.8)">−</button>
    <button onclick="resetMap()">Reset</button>
  </div>

  <div id="map-container">
    <img id="zoomable-map" src="assets/img/YOUR-MAP-FILE.png" alt="Workshop map">
  </div>
</div>

<style>
.map-zoom-section {
  margin-top: 2rem;
}

.map-controls {
  text-align: center;
  margin-bottom: 0.75rem;
}

.map-controls button {
  margin: 0 0.25rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 6px;
  background: #787878;
  color: white;
  cursor: pointer;
}

#map-container {
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid #ddd;
  cursor: grab;
  position: relative;
}

#map-container:active {
  cursor: grabbing;
}

#zoomable-map {
  width: 100%;
  height: auto;
  transform-origin: 0 0;
  user-select: none;
  pointer-events: none;
}
</style>

<script>
let scale = 1;
let posX = 0;
let posY = 0;
let isDragging = false;
let startX, startY;

const map = document.getElementById("zoomable-map");
const container = document.getElementById("map-container");

function updateMapTransform() {
  map.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
}

function zoomMap(factor) {
  scale *= factor;
  scale = Math.min(Math.max(scale, 1), 6);
  updateMapTransform();
}

function resetMap() {
  scale = 1;
  posX = 0;
  posY = 0;
  updateMapTransform();
}

container.addEventListener("wheel", function(e) {
  e.preventDefault();
  zoomMap(e.deltaY < 0 ? 1.1 : 0.9);
});

container.addEventListener("mousedown", function(e) {
  isDragging = true;
  startX = e.clientX - posX;
  startY = e.clientY - posY;
});

window.addEventListener("mousemove", function(e) {
  if (!isDragging) return;
  posX = e.clientX - startX;
  posY = e.clientY - startY;
  updateMapTransform();
});

window.addEventListener("mouseup", function() {
  isDragging = false;
});
</script>
