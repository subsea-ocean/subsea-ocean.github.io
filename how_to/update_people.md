# How to update people

## Add a new collaborator

There are three things you'll need to do to add a new profile to the people page. 
- Upload a photo
- Create a file for the biography
- Add an entry into the profiles.md file

### Uploading a photo

1. For uniformity, first crop the image to a vertically-oriented 4x5 ratio. Images with other ratios will show up fine, but will change the relative height of the person's profile listing. 
2. Upload the image to the `assets/img/` folder. For best practice, use a descriptive file name like `Firstname_Lastname.png`.  

### Creating a biography file

1. Create a new file in the `_pages/people/` folder following the naming convention `lastname.md`. 
2. Copy and paste the content from another file to use as a template, or make sure the first few lines looks as follows. 

```
#### [**Name**](personalwebsite.com) role
##### Institution

Biography. 
```
Explanation:
Hashmarks (`#`) indicate that the text following should be rendered as a header. The number of `#`'s indicates what level of header. Text surrounded by double asterisks (`**`) will be rendered as bold. An empty line indicates a new paragraph, so it must be included between institution and biography.
The square brackets `[]` followed by parentheses `()` creates a hyperlink, so that the text inside the square brackets will point to an optional personal website. If the link is not needed, remove the brackets and parentheses so that the first line is just `### **Name** role`.

### Add entry into profiles.md

The file `_pages/profiles.md` contains all the information for rendering the people page. Each block of code starting the tick mark `-` until the next tick mark defines the parameters for one person.

```
  - align: right
    image: Cy_Entist.png
    alt: Cy Entist gazes into the camera in a black and white portrait.
    content: people/entist.md
    category: *pi 

```
Explanation: 
`align` indicates which side the profile picture will be shown on. For style, this alternates with every profile, which must be set manually (all profiles below must be changed, if one is added above). <br>`image` points to the file name for the profile picture that has been added to `assets/img/`. Only the file name, not the path, is needed. <br> `alt` provides alt text for the image, which will be shown if an image fails to load and read for those using a screen reader. <br> `content` points to the file in `_pages/people/` containing the biography. <br> `category` indicates which role the profile should be categorized in, using one of three variables, either `*pi` for primary investigators, `*stud` for grad students and postdocs, or `*staff` for staff. 

1. Copy and paste the block of code. The blocks are organized by role, with PI's listed first, then students/postdocs, then staff. As long as the `category` is listed properly, the profile will ultimately show up in the correct spot, but it will be simplest if the profiles are ordered correctly in the file too. People will show up in the order listed in the file, within categories.
    - Within categories, people are sorted (manually) by position (project lead before co-PI, postdoc before PhD student, research faculty before techs) and alphabetically by last name within subcategories.
2. Update `image` and `alt` to accurately point to and describe the correct profile image.
3. Update `content` to accurately point to the correct file containing the biography.
4. Update `category` to one of `*pi`, `*stud`, or `*staff`. To add a new category, update the `display_categories` list at the top of `profiles.md` by adding `&newcat new category` to the comma-separated list inside the brackets. 
6. Update `align` so that it contains the opposite value (out of `left` or `right`) as the entry above it. Then, update all the entries below so that the alternating pattern is maintained.

## Remove a collaborator

To remove a person from the people page, delete the three components listed above. 
- In `_pages/profiles.md`, delete the block of code defining that person's profile.
- In `_pages/people/`, delete the `lastname.md` file that contains their biography.
- In `assets/img/`, delete the profile picture for that person. 