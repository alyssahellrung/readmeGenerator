# GOOD README GENERATOR--Homework 09  

## Description  
This is a command-line application that dynamically generates a README.md from a user's input.

## Table of Contents

* [Technologies Used](#technologies-used)

* [Dependencies](#dependencies)

* [How to Use](#how-to-use)

* [Demonstration Video](#demonstration-video)

* [How I Made This](#how-i-made-this)

* [GitHub Repo](#link-to-github-repo)

* [Future Development Ideas](#future-development-ideas)

## Technologies Used  
Built in Visual Studio with    
Javascript  
Node.js  
GitHub API  

## Dependencies  
Inquirer  
Axios  
fs  

## How to Use  
1) Install Inquirer and Axios using npm install.
2) Run the program by typing "node index.js" in the command line.
3) A series of questions will appear, one by one. They will ask you to input:
  --your GitHub username
  --the title of your project
  --a short description of the project
  --any installation instructions your user will need in order to run your program
  --instructions on how to use your program
  --what version your program is
  --what license you are using (choose MIT, Apache, BSD, ISC, or no license)
  --instructions for how others can contribute to your project
  --how to run tests on the project
4) Once all of the questions are answered, a new file called "README.md" will appear in your directory. This file will include:
  --your project's title
  --badges for your license and version number. 
  --a link to your GitHub
  --the short description of your project that you entered on the command line
  --a table of contents with links to the appropriate sections of your README
  --the installation instructions, usage instructions, version, license, instructions for how to contribute, and test information that you entered on the command line
  --a section where users or developers can contact you with questions. This section will include your GitHub profile picture and your GitHub email address if it is public.

## Demonstration Video

## How I Made This  
I started with two Javascript files, one (index.js) that handled the Inquirer prompts, the Axios AJAX call, and the writeFile function, and the other (generateMarkdown.js) that laid out the structure of the README.md file that I was putting together, using template literals as a way to both plan out the page and handle the resposes coming in from the user and GitHub's API.  

Because I brought the generateMarkdown.js file over to index.js and assigned it to the const "markdown", I was able to inject that template into the writeFile function in index.js.  

The application gets most of the content for the generated README directly from the user, but it uses their GitHub username to access their GitHub profile image and email address from the GitHub API.

## Link to GitHub Repo    
(https://github.com/alyssahellrung/readmeGenerator)

## Future Development Ideas
I would like to add more style to the README (as much as possible in a markdown file) as well as a way to insert screen shots/gifs of the user's project.



