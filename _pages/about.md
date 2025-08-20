---
layout: about
title: about
permalink: /about
subtitle: 
nav: true
nav_order: 1
images:
  #venobox: true
  slider: true

profile:
  align: right
  #image: subsea_logo.png
  #image_circular: false # crops the image to make it circular
  more_info: 

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

We are an international team of biogeochemists, plankton ecologists, and oceanographers that seeks to improve understanding of how the marine biosphere will respond to planetary change through detailed studies on the ecological and biogeochemical functioning of the subtropical gyres. SUBSEA is supported by the Schmidt Sciences Foundation as part of the Ocean Biogeochemistry Virtual Institute (OBVI).

The subtropical ocean gyres cover more than 20% of Earth’s surface area, making them some of the largest ecosystems on the planet. Despite persistently low concentrations of nutrients, the subtropical gyres are important components of the global carbon cycle. Our research focuses on the complex space-time structure of the sunlit portion of the upper ocean, from the sea surface to approximately 200 meters deep. The backbone of our work relies on shipboard observations in both the North Pacific and South Atlantic subtropical gyres. Our team has expertise in ocean biogeochemistry, remote and autonomous sensing technologies, and mathematical modeling. Together, SUBSEA aims to improve mechanistic understanding of how carbon and nutrients move through the photic zone in support of plankton productivity and carbon export. Specifically, we are interested in how nutrient cycling in the poorly studied subsurface habitats of the upper ocean impact plankton productivity and sequestration of carbon dioxide by the subtropical gyres.

<!--
<a class="venobox" data-gall="myGallery" href="assets/img/about_gallery_1.jpg"><img src="assets/img/about_gallery_1.jpg" /></a>
<a class="venobox" data-gall="myGallery" href="assets/img/about_gallery_2.jpg"><img src="assets/img/about_gallery_2.jpg" /></a>
<a class="venobox" data-gall="myGallery" href="assets/img/about_gallery_3.jpg"><img src="assets/img/about_gallery_3.jpg" /></a>
<a class="venobox" data-gall="myGallery" href="assets/img/about_gallery_4.jpg"><img src="assets/img/about_gallery_4.jpg" /></a>
<a class="venobox" data-gall="myGallery" href="assets/img/about_gallery_5.jpg"><img src="assets/img/about_gallery_5.jpg" /></a>
<a class="venobox" data-gall="myGallery" href="assets/img/about_gallery_6.jpg"><img src="assets/img/about_gallery_6.jpg" /></a>
-->

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/about_gallery_1.jpg" class="img-fluid rounded" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/about_gallery_2.jpg" class="img-fluid rounded" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/about_gallery_3.jpg" class="img-fluid rounded" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/about_gallery_4.jpg" class="img-fluid rounded" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/about_gallery_5.jpg" class="img-fluid rounded" %}</swiper-slide>
</swiper-container>
