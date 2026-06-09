<style>
.media-slider {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px 10px;
}

.media-card {
  flex: 0 0 260px;
  background: #111;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.35s ease;
  text-decoration: none;
  color: white;
}

.media-card:hover {
  flex: 0 0 360px;
  transform: translateY(-4px);
}

.media-card img {
  width: 100%;
  height: 250px;
  min-height: 250px;
  max-height: 250px;
  object-fit: cover;
  display: block;
}

.media-caption {
  padding: 14px;
  font-size: 0.95rem;
  line-height: 1.5;
  text-align: center;
}

.media-card:hover .media-caption {
  font-size: 1rem;
}
</style>

<h2 style="text-align:center; margin-bottom:30px;">
  In the Media
</h2>

<div class="media-slider justify-content-center">

  <a class="media-card"
     href="https://www.youtube.com/live/oRuxfFRRwh4?si=GLb5M_a321oTtIUr"
     target="_blank">

    <img src="/assets/img/media1.jpg">

    <div class="media-caption">
      Livestream from R/V Falkor (too) about cruise operations.<br>
      Source: YouTube, Schmidt Ocean Institute.
    </div>

  </a>

  <a class="media-card"
     href="https://www.instagram.com/p/DXxS4g8FSgS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
     target="_blank">

    <img src="/assets/img/media2.png">

    <div class="media-caption">
      Instagram post.<br>
      Source: Schmidt Sciences.
    </div>

  </a>

  <a class="media-card"
     href="https://www.instagram.com/reel/DXznxspuQWs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
     target="_blank">

    <img src="/assets/img/media3.png">

    <div class="media-caption">
      Instagram reel.<br>
      Source: Scientific American.
    </div>

  </a>

  <a class="media-card"
     href="https://schmidtocean.org/critical-roles-in-global-carbon-cycle/"
     target="_blank">

    <img src="/assets/img/media4.png">

    <div class="media-caption">
      Article.<br>
      Source: SOI.
    </div>

  </a>

  <a class="media-card"
     href="https://flbs.umt.edu/flbs-news/diving-into-ocean-gyre-research/"
     target="_blank">

    <img src="/assets/img/media5.png">

    <div class="media-caption">
      Article.<br>
      Source: FLBS.
    </div>

  </a>

  <a class="media-card"
     href="https://umt.exposure.co/subsea-expedition"
     target="_blank">

    <img src="/assets/img/media6.png">

    <div class="media-caption">
      Photo essay.<br>
      Source: University of Montana.
    </div>

  </a>

</div>
