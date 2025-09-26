# Add papers to the publications page

The publications list is generated from the file `_bibliography/papers.bib`. The entries for papers in this file are in BibTeX format, most commonly used when formatting documents with LaTeX but generally a useful format. There are a few ways to enter more papers:
1. Enter information about a paper manually, following a template from an existing entry (make sure you don't forget any commas!)
2. Export a citation in this format from the journal's website. Look for a button that says "Cite" or "Cite this paper", and look to export the BibTeX format. It may export a file ending in `.bib`; just open the file with any text editor and copy and paste the contents.
3. Load the paper into a citation manager (Zotero, for example), and then export the citation in BibTeX format. 

Here is an example:
```
@article{barone2024bouncing,
  author = {Benedetto Barone},
  title = {Bouncing photons, underwater robots, and the ocean’s green film},
  journal = {Proceedings of the National Academy of Sciences},
  volume = {121},
  number = {48},
  pages = {e2420619121},
  year = {2024},
  doi = {10.1073/pnas.2420619121},
  URL = {https://www.pnas.org/doi/abs/10.1073/pnas.2420619121},
  eprint = {https://www.pnas.org/doi/pdf/10.1073/pnas.2420619121},
  preview = {barone2024_thumbnail.png}
}
``` 
Explanation: 
<br>`@article` defines the reference type. See [this list](https://www.bibtex.com/e/entry-types/) for more examples if you're citing something other than a journal article. <br> Here, `barone2024bouncing` is the identifier for this entry. This is not really used in this website, but would be used if you wanted to add an in-text citation in a LaTeX document, for example. <br> Each component must be separated by a comma, and the content of each component must be in curly brackets. 

Notes:
- At a minimum, the entry should have a defined author, title, journal, and year. Ideally, the entry will also have a defined doi (this will be postpended to `https://doi.org/` to link to the online paper). 
- A thumbnail image can be uploaded to `assets/img/publication_preview`, and the file name entered in the `preview` field. This is optional. If you want none of the thumbnail images to be shown, search for `enable_publication_thumbnails: true` in `_config.yml` and change it to false. 