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

## Flathead Lake Biological Station Map

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<div id="flbsMap" style="height:700px; width:100%; border-radius:0.5rem;"></div>

<script>
const map = L.map("flbsMap", {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 3,
  scrollWheelZoom: true
});

const imageUrl = "/assets/flbs-grounds-map-may-2021%20(1).pdf.png";

const imageWidth = 1600;
const imageHeight = 1200;

const bounds = [[0, 0], [imageHeight, imageWidth]];

L.imageOverlay(imageUrl, bounds).addTo(map);

map.fitBounds(bounds);
</script>
