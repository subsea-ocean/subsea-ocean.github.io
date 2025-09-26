# How to add a page for workshop (e.g. 2026 workshop)

1. The file `workshops.md` controls the dropdown menu in the navigation bar. There shouldn't be any content outside of the `---`'s that denote the header. Un-comment (delete `#`'s) to add the 2026 option. 
    - If there are future workshops, add two more lines under `children` with the `title` (dropdown name) and `permalink` (filename, minus `.md`) for the page. Note that the `title` and `permalink` must be intended as shown.

```
---
layout: page
title: workshops
nav: true
nav_order: 3
dropdown: true
children:
  - title: 2025
    permalink: /workshop_2025
  #- title: 2026
  #  permalink: /workshop_2026
---
```

2. As shown in the code block above, the new 2026 option will link to to a page called workshop_2026, so there needs to be a matching document in `_pages/` named `workshop_2026.md` for the link to work correctly. Create a new document or duplicate the existing `workshop_2025.md` file. 
3. Add content to the new file as desired. 

## [Tips for including images](https://github.com/subsea-ocean/subsea-ocean.github.io/tree/main/how_to/tips.md#Including-images)