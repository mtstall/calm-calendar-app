# Calm-Calendar
## USER STORY
AS A Work-From-Home worker  
I WANT to be able to schedule meetings and events  
SO THAT I can stay organized and have dedicated leisure time and activitities.
## ACCEPTANCE CRITERIA
GIVEN a calendar web-app  
WHEN I visit the site for the first time  
THEN I am presented with the homepage, which includes a login and signup button  
WHEN I choose to sign up  
THEN I am prompted to create a username and password  
WHEN I click on the sign-up button  
THEN my user credentials are saved and I am logged into the site  
WHEN I revisit the site at a later time and choose to sign in  
THEN I am prompted to enter my username and password  
WHEN I am signed in to the site  
THEN I am directed to my own personal calendar  
WHEN I click on a day  
THEN I can add an event and time for that day  
WHEN I look back at a past date  
THEN I can view those saved events  
WHEN I click on an event  
THEN I am able to see the details of that event, edit or delete the event  
WHEN I click on the logout option in the navigation  
THEN I am signed out of the site  
WHEN I am idle on the site for more than a set time  
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments  


### NODE AND EXPRESS
Handles the CRUD routing. Sending back-end data to front, and vice versa. Being able to update, pull, post, puts….deletes….
### HANDLEBARS
--for html and some js helper functionality  
--fullcalendar plugin to use with handlebars  
### MYSQL
Our databases for users logging into our app
### Sequelize
--for our models (tables), to interact with our databases
### OUR NEW LIBRARY:
--materialize css for css and feature UI (maybe calendar, but definitely buttons, auto-complete, drop-down, styling)  
To touch on other project requirements
### For AUTH:
--calendar is specific to the user  
--make sure we do GET and PUSH routes  
--MVC architecture  
--API key should be in .dotenv  
--extra functionality, given time:  
--maybe, if we need it: node-sscheduler for matching up different people’s schedules  
--make repos-i-torre  
--decide on our rules ESLINT  
--decide who wants to be in what end of stack  
--wire-frame (excalidraw)  
//commented out

## CONTRIBUTORS
Taylor Stallings  
Conner Williams  
Buck Blocker  
Samuel Harper  
Benjamin Rashleigh  
Camila Moreiras  
## Installations  
npm install --save-dev eslint-config-airbnb  

# create a `.eslintrc` configuration file
./node_modules/.bin/eslint --init

# run ESLint against any file with
./node_modules/.bin/eslint yourfile.js