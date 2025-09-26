# How to add new news announcements

News announcements are contained in the `_news/` folder. They can be either inline, so that the whole announcement is shown on the news page, or not inline, with a title shown on the news page that links to a full-page announcement. There is a `news/` folder in `assets/img` for photos that will be included in a news announcment. 

## Create a new announcement

1. Create a new markdown file with a descriptive filename (i.e. `filename.md`) in the `_news/`. 
2. Copy and paste the header from an existing announcement.
3. Update the `title`, which will be the whole announcement if `inline` is true, and the `date`. 
    - Note that the announcement will not work if the date is in the future. I recommend adding the annoucement to the `_news` folder only on the day you want it posted to avoid this problem. Save the file somewhere else to draft it. 
4. Include whatever content is relevant. 
5. Once the file is added to `_news`, it will appear on the news page, sorted in reverse chronological order. 

## [Tips for including images](https://github.com/subsea-ocean/subsea-ocean.github.io/tree/main/how_to/tips.md#Including-images)