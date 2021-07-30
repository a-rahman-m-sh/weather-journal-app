# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

# Devolopment Strategy

## After Completeing server file I splitted the project to 4 functions explained below

### 1.resultGenerator
This is the main function that calls all other functins
### 2.contactAPI
this is ithe function that getting data from API
### 3.postData
this is the function that take the data from API and posting it to dataobject
### 4.updateUI
this is the unction that access data object and add the values to UI

# How to run 
1.install node
2. in terminal write npm install express
3. in terminal write npm install cors
4. in terminal write npm install body-parser
5. in terminal write node sever.js
6. now try the app in localhost:8000
7. put zip code in the field and write yourfeeling then click generate
8. the output will be in last div in the page and will city name, date, tempreture, feeling that you wrote
