---
layout: home
title: "home" 
permalink: /
nav: false
nav_order: 0
subtitle:  
---
<style>
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

.video-background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  <!-- backdrop-filter: blur(2px); -->
}

[data-theme='dark'] .video-overlay {
  background: rgba(0, 0, 0, 0.7);
}

[data-theme='light'] .video-overlay {
  background: rgba(255, 255, 255, 0.3);
}

.hero-container {
  position: relative;
  z-index: 1;
  height: calc(100vh - 220px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  overflow: hidden;
}

.hero-content {
  margin-top: -4rem;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: grid;
  gap: 3rem;
  align-items: center;
  animation: fadeInUp 0.8s ease-out;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--global-text-color);
  margin-bottom: 1rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  text-align: center
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--global-text-color);
  margin-bottom: 1.5rem;
  line-height: 1.3;
  font-weight: 400;
  opacity: 1;
  text-align: center;
}

.explore-message {
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
}

[data-theme='dark'] .explore-message {
  color: #6C9C4E;
}

[data-theme='light'] .explore-message {
  color: #1D4528;
}

.explore-message:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

.hero-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
}

[data-theme='dark'] .location-info p:first-child {
  color: #6C9C4E;
}

[data-theme='light'] .location-info p:first-child {
  color: #1D4528;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>

<div class="video-background">
  <video autoplay loop muted playsinline>
    <source src="assets/video/ocean.mov" type="video/mp4">
    Your browser does not support video playback.
  </video>
</div>
<div class="video-overlay"></div>

<div class="hero-container">
  <div class="hero-content">
    <div class="hero-text">
      <h1 class="hero-title"><img src="assets/img/subsea_logo_small.png" alt="SUBSEA logo" width="156" height="153"><br><br>SUBSEA</h1>
      <h3 class="hero-subtitle">Subtropical Underwater Biogeochemistry<br>and Subsurface Export Alliance</h3>
    </div>
  </div>
</div>