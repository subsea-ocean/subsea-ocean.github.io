---
layout: page
title: 2026 Site Visit
permalink: /site-visit-2026-subsea-team/
nav: false
---

<style>
.post-title {
  display: none;
}

.map-controls {
  text-align: center;
  margin-bottom: 15px;
}

.map-controls button {
  margin: 0 4px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background: var(--global-theme-color);
  color: white;
  cursor: pointer;
}

#map-container {
  width: 100%;
  height: 600px;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid rgba(255,255,255,0.15);
  cursor: grab;
  position: relative;
}

#map-container:active {
  cursor: grabbing;
}

#flbsMap {
  width: 100%;
  height: auto;
  transform-origin: 0 0;
  user-select: none;
  pointer-events: none;
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

**There will also be a meeting for just the SUBSEA team on Tuesday, September 22 & Wednesday, September 23, 2026**

Lodging and catered meals will be available at FLBS.

Lodging is available for the nights of **Sunday September 20 – Friday 25**.  
Meals will be available from **dinner on September 21 through breakfast on September 26**.

---

## RSVP

Please complete the RSVP form below. Once your travel is booked, please also fill out the travel details form so we can coordinate transportation.

<div style="text-align:center; margin:30px 0;">
  <a  
    href="https://docs.google.com/forms/d/e/1FAIpQLSc8lTcTOvxiaDziV58lBRWVq4ADzfE_rfb75vMxPRD_CWiKnQ/viewform?usp=header"
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
      margin:6px;
    ">
    RSVP
  </a>

  <a  
    href="https://docs.google.com/forms/d/e/1FAIpQLSeJy6oYlp9E4k2g6RzhghOpIa0JZh8CGO3GCt231PviiLwliQ/viewform?usp=header"
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
      margin:6px;
    ">
    Fill out travel details
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

<div class="map-controls">
  <button onclick="zoomMap(1.2)">Zoom In</button>
  <button onclick="zoomMap(0.8)">Zoom Out</button>
  <button onclick="resetMap()">Reset</button>
</div>

<div id="map-container">
  <img
    id="flbsMap"
    src="/assets/flbs-grounds-map-may-2021%20(1).pdf.png"
    alt="Flathead Lake Biological Station grounds map"
  >
</div>

<script>
let scale = 1;
let posX = 0;
let posY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;

const map = document.getElementById("flbsMap");
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
