# Recipe Box
## A Better Way to Store your Online Recipes

### Description:
This is a Single-Page Application that gives users a space to store their favorite online recipes in a way that makes them easy to find, categorize, and edit. This also has a space to search for new recipes and quickly add them to our own Recipe Box at the click of a button!

### Project Details
This project is styled with vanilla CSS and was built by Andrew Smit. He gave permission to Ben Aschenbrenner to clone and use it for educational purposes for Flatiron School. 

### Installation
Fork and clone the repo and then change into the directory you created.
When you are in the newly created directory run ``` json-server --watch db.json ```

Then run ```npm install && npm start ``` to download all dependencies and run the project on your local server. Since the back-end was deployed first, it will connect to localhost:3000 and your front end will ask to run on a different network. Click "Y" for "yes" and the page should deploy accordingly.

**In order for the project to run properly, the back-end repo needs to be run on localhost:3000 while the front end runs on 3001.**

### Credentials
This project's icon was provided courtesy of 'Those Icons' via [flaticon.com](https://www.flaticon.com/).

This project utilizes an API from [rapidapi.com](https://rapidapi.com/hub) for the search page.

### How to Use
The purpose of this repo is to facilitate live coding practice. There is a video that is associated. [Link to recording of video](https://youtu.be/OvFFw5T0-0g)

Challenge 1 (Hard)
Add a new controlled form on your search new recipes page that takes in a max number of minutes and filters the new recipes based on that constraint.

Challenge 2 (Very Hard)
Instead of forcing people to use an input with minutes create a drop down select tool that allows people to choose the number of clocks they are willing to put in. Choosing the maximum amount will show all recipes.