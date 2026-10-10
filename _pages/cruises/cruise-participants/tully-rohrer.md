---
layout: page
title: ""
permalink: /cruises/participants/tully-rohrer/
nav: false
---

<div id="profile-banner" style="
  background-size: cover;
  background-position: center;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.25rem;
  margin-bottom: 40px;
">

  <h1 style="
    color:white;
    font-size:4rem;
    font-weight:700;
    margin:0;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
  ">
    Tully Rohrer
  </h1>

</div>

<div style="text-align:center;">

  <img 
    src="/assets/img/cruises/cruise-participants/tullyrohrercruise.png"
    alt="Tully Rohrer"
    style="
      width:220px;
      height:220px;
      object-fit:cover;
      border-radius:50%;
      border:6px solid white;
      margin-top:-150px;
      position:relative;
      z-index:5;
      background:black;
    "
  >

</div>

<div style="
  text-align:center;
  font-size:2rem;
  font-weight:700;
  margin-top:25px;
  margin-bottom:35px;
">
  Technician
</div>

<div style="
  max-width:900px;
  margin:auto;
">

<p style="
  font-size:1.05em;
  line-height:1.8;
">

Tully is an environmental science graduate of Colby College in Maine.

</p>

<p style="
  font-size:1.05em;
  line-height:1.8;
">

His background as a seagoing oceanographic technician spans nearly 800 days at sea over eight years of mooring and instrument operations at Oregon State University and another seven years at the University of Hawaiʻi at Mānoa as a member of Angelicque White’s lab and the Hawaiʻi Ocean Time-Series (HOT).

</p>

<p style="
  font-size:1.05em;
  line-height:1.8;
">

With SUBSEA, he specializes in deck array operations, nitrogen fixation measurements, and bio-optics on the underway seawater system.

</p>

</div>

<script>
  const cruise = new URLSearchParams(window.location.search).get('cruise');
  const banner = document.getElementById('profile-banner');

  if (cruise === 'hot') {
    banner.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/assets/img/HOT.png')";
  } else if (cruise === 'south-atlantic-1') {
    banner.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/assets/img/cruises/teampicfaded.png')";
  }
</script>
