# Editing the website with GitHub

There two basic ways to update the files, either directly on github.com, where the code that creates the website is stored, or on a local copy of the repository on your computer, and then pushing the changes to the online version. Either one will work to update the website, but if you are using Github's online text editor, you will not be able to preview changes to the site before publishing them publicly. 

## What is GitHub

More comprehensive and knowledgeable explanations surely exist online, but I will provide a brief description for the purposes of this website. **Git** is a version control software, which allows changes to be tracked in files. **GitHub** is an online Git repository host. Every change made to a Git repository is tracked using "commits" so that you can see who made the change, when it was made, and what it consisted of. 

## Updating files online

If you have the repository open with edit access on GitHub, you should see an option in the upper right to "Add File". In this menu, you can either start a new file in an online text editor, or upload a file. Make sure you're in the right folder for where you want the file to end up. You could upload a new news announcement, for example, into `_news/` and accompanying photos into `assets/img/`. 

After you create/upload the file, there will be a green button to "Commit changes", with text boxes for describing the change provided. When a new change is committed to GitHub, the website will automatically re-deploy. This will typically take 5-10 minutes; you can check on its status by clicking on Deployments in the righthand column.

## Setting up a local copy 

First, you need to copy the repository to your local computer. This is called cloning. Instructions are available [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). 
> If this is your first time using Git/GitHub, you may have additional set-up required. A Getting Started Guide is available [here](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git)

Next, follow these steps in order to host a local copy of the website to preview changes. Instructions are available [here](https://github.com/alshedivat/al-folio/blob/main/INSTALL.md#local-setup-using-docker-recommended) in first bit of the section labeled "Local Setup Using Docker (Recommended)". It will direct you to download docker, docker-compose, and then run two commands in your computer's command line interface. 

Once this is all set up, all you need to do is run the second command metioned above, `docker compose up` will allow you to preview the website at `http://localhost:8080`. Remember that these changes won't be published until you commit **and** push them to GitHub. When a new change is pushed to GitHub, the website will automatically re-deploy. This will typically take 5-10 minutes; you can check on its status by clicking on Deployments in the righthand column. 