# How to update the about page

The file `_pages/about.md` contains the content for the about page.

## Updating the description

Edit the text in `about.md`. 

## Updating the image gallery

Each image is controlled by the code between `<swiper_slide>` and `</swiper-slide>`. 

```
  <swiper-slide> {% include figure.liquid loading="eager" path="assets/img/about_gallery_7.jpg" class="img-fluid rounded" alt="The SUBSEA team stands on board the ship at night." %} </swiper-slide>
```

### Add an image

1. Upload a new image to `assets/img/`.
2. Copy and paste the code for an image, including the `<swiper-slide>` tags, as in the block above.
3. Edit the `path` to point to the new image. Here, the `assets/img/` path must be included.
4. Edit the `alt` text to accurately describe the new image. 

### Delete an image
1. Delete the whole line of code as in the block above. 
2. Delete the image file in `assets/img/`.