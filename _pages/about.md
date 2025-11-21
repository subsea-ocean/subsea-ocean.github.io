---
layout: about
title: about
permalink: /about
subtitle: 
nav: true
nav_order: 1
images:
  slider: true

profile:
  align: right
  #image: subsea_logo.png
  #image_circular: false # crops the image to make it circular
  more_info: 

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 3 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

SUBSEA (Subtropical Underwater Biogeochemistry and Subsurface Export Alliance) is an [international team](/people) of biogeochemists, plankton ecologists, and oceanographers that seeks to improve understanding of how the marine biosphere will respond to planetary change through detailed studies on the ecological and biogeochemical functioning of the subtropical gyres. SUBSEA is supported by the Schmidt Sciences Foundation as part of the [Ocean Biogeochemistry Virtual Institute](https://www.schmidtsciences.org/obvi/).

<div class="about-map float-{% if profile.align == 'left' %}left{% else %}right{% endif %}">
  {% include figure.liquid loading="eager" path="assets/img/subtropical_gyres_map.png" class="img-fluid logo-fig" alt="Dashed lines with arrows indicate the location and direction of rotation of the subtropical gyres in the North and South Atlantic, North and South Pacific, and Indian Oceans." caption="SUBSEA's work is founded on observations from the North Pacific and South Atlantic subtropical gyres. SUBSEA partner institutions are marked in red."%} 
</div>
<div class="clearfix">
  The subtropical ocean gyres cover more than 20% of Earth’s surface area, making them some of the largest ecosystems on the planet. Despite persistently low concentrations of nutrients, the subtropical gyres are important components of the global carbon cycle. Our research focuses on the complex space-time structure of the sunlit portion of the upper ocean, from the sea surface to approximately 200 meters deep. The backbone of our work relies on shipboard observations in both the North Pacific and South Atlantic subtropical gyres. Our team has expertise in ocean biogeochemistry, remote and autonomous sensing technologies, and mathematical modeling. Together, SUBSEA aims to improve mechanistic understanding of how carbon and nutrients move through the photic zone in support of plankton productivity and carbon export. Specifically, we are interested in how nutrient cycling in the poorly studied subsurface habitats of the upper ocean impact plankton productivity and sequestration of carbon dioxide by the subtropical gyres.
</div>

<p> <br> </p>

<swiper-container navigation="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/about_gallery/about_gallery_0.jpg" class="img-fluid rounded" alt="Scientists stand and walk on the deck of a research vessel. Some are walking while others stand by the edge of the ship and look out at the ocean." %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/about_gallery/about_gallery_1.jpg" class="img-fluid rounded" alt="The SUBSEA team readies a Wirewalker for deployment from a research ship at night." %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/about_gallery/about_gallery_2.jpg" class="img-fluid rounded" alt="Four scientists stand at the rear of a ship, looking out towards the ocean, with the sun setting in front of them." %}</swiper-slide> 
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/about_gallery/about_gallery_3.jpg" class="img-fluid rounded" alt="Four men stand at a blue railing, lowering scientific equipment into the ocean." %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/about_gallery/about_gallery_4.jpg" class="img-fluid rounded" alt="Three scientists work together to lift a sediment trap array over the edge of the ship while others look on." %}</swiper-slide>
</swiper-container>

<br>

## Partner Institutions

<div class="row mt-3 align-self-center">
  <div class="col-sm mt-3 mt-md-0 align-self-center">
  {% include figure.liquid loading="eager" path="assets/img/um_logo.png" class="img-fluid logo-fig" alt="University of Montana logo" width="70%" %} 
  </div>
  <div class="col-sm mt-3 mt-md-0 align-self-center">
  {% include figure.liquid loading="eager" path="assets/img/uhm_logo.png" class="img-fluid logo-fig" alt="University of Hawai'i at Mānoa logo" width="70%" %}
  </div>
  <div class="col-sm mt-3 mt-md-0 align-self-center">
  {% include figure.liquid loading="eager" path="assets/img/umiami_logo.png" class="img-fluid logo-fig" alt="University of Miami logo" width="50%" %}
  </div>
</div>
<div class="row mt-3 align-self-center">
  <div class="col-sm mt-3 mt-md-0 align-self-center">
  {% include figure.liquid loading="eager" path="assets/img/inidep_logo.png" class="img-fluid logo-fig" alt="Instituto Nacional de Investigación y Desarrollo Pesquero logo" width="70%" %} 
  </div>
  <div class="col-sm mt-3 mt-md-0 align-self-center">
  {% include figure.liquid loading="eager" path="assets/img/uct_logo.png" class="img-fluid logo-fig" alt="University of Cape Town logo" width="60%" %}
  </div>
  <div class="col-sm mt-3 mt-md-0 align-self-center">
  {% include figure.liquid loading="eager" path="assets/img/osu_logo.png" class="img-fluid logo-fig" alt="Oregon State University logo" width="70%" %}
  </div>
</div>
<div class="row mt-3 align-self-center">
  <div class="col-sm mt-3 mt-md-0 align-self-center">
  </div>
  <div class="col-sm mt-3 mt-md-0 align-self-center">
  {% include figure.liquid loading="eager" path="assets/img/carnegie_logo.png" class="img-fluid logo-fig" alt="Carnegie Institution for Science logo" width="70%"%}
  </div> 
  <div class="col-sm mt-3 mt-md-0 align-self-center">
  </div>
</div>