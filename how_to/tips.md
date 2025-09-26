# Markdown and other tips

Most of the website will be controlled using Markdown syntax. In some cases, you may need HTML. See below for a brief introduction to each. 

## What is Markdown?

Markdown is language that lets you easily add formatting to plain text documents. To see this in action, you can toggle between the "preview" and "code" modes at the top of this document, if you're reading it in GitHub. In the context of this website, markdown files, ending in `.md`, provide a readable way to format pages and posts. This formatting gets translated to HTML when the website is built. To maintain this website, the only files you should need to work with are markdown files. 

### Useful syntax

#### YAML header

Most markdown files begin with a header, delineated b a line with three dashes --- before and after the header. The header defines different parameters that will determine how the page appears, such as layout and page title. 

#### Paragraphs

Two new lines indicates a new paragraph. 
Just one new line between sentences will not lead to a new paragraph, such as this one.

With two new lines, this text is shown in a separate paragraph. <br> To get text to display on a new line without the spacing added between paragraphs, like this sentence, use the HTML tag "\<br>". You can always use HTML tags in markdown, if you'd like. 

#### Headers

Headers are indicated using hashmarks \#. The number of hashmarks indicates the level of header. Headers should always be used in a logically descending order for accessibility. 

Headers have to start on a new line, so # This Header Won't Work. They also have to have a space between the hashmarks and text,

#So This Won't Work Either.

#### Links

Links are indicated in markdown using square brackets \[] to denote the text that describes the link and parentheses \() to provide the url. You can link to another page on the website using `(/pagename)`, to another [heading](#paragraphs) in the markdown file using `(#headingname)`, or to an [external url](http://google.com) using `(urlcom)`. For accessibility, the text for links should always be descriptive.

#### Text formatting

For **bold text**, add two asterisks \** before and after the text you'd like to emphasize. 

For *italics*, add one asterisk \* before and after the text. 

This is for ^extra emphasis^. 

To write a list, just use 
- bullet 
- points

or 

1. numbered
2. points

#### See this [cheat sheet](https://www.markdownguide.org/cheat-sheet/) for more markdown syntax. 

## Brief intro to HTML and liquid

### HTML

HTML is the basis of all web pages. It uses tags to define how content should show up. Tags are enclosed in angle brackets and should be both opened and closed. An opening tag for a paragraph of text might look like `<p>` and a closing tag would look like `</p>`, with the slash indicating that it is closing. 

### Liquid

Liquid is a language that was, weirdly, created by Shopify. Like Markdown, it's basically just a way to control the HTML that will ultimately define the website in a more human-readable way. Code in liquid is usually defined by curly brackets `{}`. To reference a variable in liquid you use double curly brackets `{{ site.variable }}` and for most other statements, you use curly brackets with percent signs `{% some code %}`. 

## Including images

Including images is relatively straightforward with the use of the `include.figure` template (see `_includes/figure.liquid`). Including mulitple images in a layout that looks good is slightly harder and generally will include use of HTML. Images cannot be placed in a folder that starts with `_`: keep all images in `assets/img/` and the `about_gallery/`, `footer/`, `news/`, and `publication_preview/` folders within. 

> NOTE: GitHub recommends keeping repositories under 1 GB total in size. Images can quickly add up, and for the most part, even smartphones images are larger and higher quality than is really needed. To avoid storage issues, I have aimed to (and recommend that you) resize images to under 1 MB each and make sure to delete images that end up unused.

> Another NOTE: If multiple images are going to be displayed, either in a grid (responsive columns) or gallery, it looks best if they all have the same aspect ratio. The easiest way to control this is to crop the images before saving them to `assets/img/`. 

### Images in responsive columns

First, a quick definition. Here, *responsive* refers to web design that is meant to be useable across different device sizes. For example, see what happens to the [profiles page](https://subsea-ocean.github.io/people) when you view on a phone or a skinnier browser window. For images to show up best, they should each be wrapped in a responsive column that will do this work of adjusting to screen size for you. 

#### One image

If you have only one image (for example, on the [OBVI workshop announcement](https://subsea-ocean.github.io/news/obvi_2025_workshop_application)), just use the following call to the `figure.liquid` template. Change the path to your image path. Because the post will already be wrapped in a responsive column, the image will change in size with the column.

 ``` 
 {% include figure.liquid loading="eager" path="assets/img/my_image.png" class="img-fluid rounded z-depth-0" alt="One or two sentences describing the image." %}
 ```

> NOTE: Alt text, provided with the `alt=`, is an important accessibility feature for websites. It will be displayed if the web page is unable to load an image for some reason, and will be read by a screen reader. Alt text should be a concise and relevant description of the image's subject so that a user not seeing the image does not miss out on context. 

#### More than one image

If you have multiple images and want them to be shown on the same line (for example, on the [September 2025 HOT cruise new post](https://subsea-ocean.github.io/news/sep2025_HOTcruise)), each one needs its own column within a responsive row. Here is an example to display three images, evenly spaced, in one row. 

```
<div class="row mt-3 align-self-center">
  <div class="col-sm mt-3 mt-md-0 align-self-center">
    {% include figure.liquid loading="eager" path="assets/img/my_img1.png" class="img-fluid rounded" alt="This text describes the image."%} 
  </div>
  <div class="col-sm mt-3 mt-md-0 align-self-center">
    {% include figure.liquid loading="eager" path="assets/img/my_img2.png" class="img-fluid rounded" alt="This text describes the image."%} 
  </div>
  <div class="col-sm mt-3 mt-md-0 align-self-center">
    {% include figure.liquid loading="eager" path="assets/img/my_img3.png" class="img-fluid rounded" alt="This text describes the image."%} 
  </div>
</div>
```
Explanation:
`<div>` tags are defining an enclosing area for content in html. The text that follows `class=` uses Bootstrap, a framework for responsive websites, to create responsive rows and columns. The function of each of the bits of text within the class means is beyond the scope of this explanation and my own knowledge. The important thing to note is that each call to `{% include figure.liquid ... %}` is wrapped inside a `<div class="col ...">` which is also closed with `</div>`. All three columns are inside of the `<div class="row...">`. 

### Images in slider galleries 

The following code shows how to create a slider gallery, such as the one on the [about page](https://subsea-ocean.github.io/about).

```
<swiper-container navigation="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/my_img1.jpg" class="img-fluid rounded" alt="Descriptive alt text." %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/my_img2.jpg" class="img-fluid rounded" alt="Descriptive alt text." %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/my_img3.jpg" class="img-fluid rounded" alt="Descriptive alt text." %}</swiper-slide> 
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/my_img4.jpg" class="img-fluid rounded" alt="Descriptive alt text." %}</swiper-slide>
</swiper-container>
```
Explanation: 
Here, the calls to `{% include figure.liquid ... %}` are identical to previous code block, but this time are contained within `<swiper-slide>` tags, which are in turn contained by `<swiper-container>`. 

The slider gallery uses the [Swiper](https://swiperjs.com/) library. In order for it to work, you must have the library toggled on in the YAML header, as shown below.

```
---
layout: post
title: My Title
... more header things ... 
images:
  slider: true
---
```

## Accessibility

### Alt text

All images should have alt text associated with them. If they are purely decorative (e.g. plankton images in the footer), they can have blank alt text `alt=""` so that screen readers skip over them. For more advice on alt text, see [this webpage](https://www.accessibilitychecker.org/guides/alt-text/).

### Header order

Headers should be used in descending order. For example, in Markdown, this means that every header indicated by `###` should be preceeded by a header indicated by `##`. Note that for most pages, the page title (as defined in the YAML header) will be the highest level header (i.e. `<h1>` in HTML or `#` in Markdown), so within the text it is best to start with headers at level two (`##` or `<h2>`). 