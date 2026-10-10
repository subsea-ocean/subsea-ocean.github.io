---
layout: page
title: ""
permalink: /cruises/participants/robert-hall/
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
    Robert Hall
  </h1>

</div>

<div style="text-align:center;">

  <img 
    src="/assets/img/cruises/cruise-participants/roberthallcruise.png"
    alt="Robert Hall"
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
  Co-PI
</div>

<div style="
  max-width:900px;
  margin:auto;
">

<p style="
  font-size:1.05em;
  line-height:1.8;
">

Robert Hall is Distinguished Professor of Limnology at Flathead Lake Biological Station, University of Montana, where he has worked since 2017. Prior to that he was on the faculty at the University of Wyoming, where he started in 1998.

</p>

<p style="
  font-size:1.05em;
  line-height:1.8;
">

Since graduate school at the University of Georgia, he has been interested in aquatic carbon and nitrogen cycling.

</p>

<p style="
  font-size:1.05em;
  line-height:1.8;
">

Current work links process models to long-term riverine oxygen time series, statistical modeling of biogeochemical fluxes, models for isotope tracers, and dissolved organic and inorganic carbon dynamics.

</p>

<p style="
  font-size:1.05em;
  line-height:1.8;
">

Work as a co-PI on the SUBSEA project includes models for particle export fit to optically sensed particle depth distributions and carbon oxygen stoichiometry of metabolism.

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
