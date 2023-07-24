# MVX-MCO
CCAPDEV MCO - Fulcher, Sang, Villamiel

MCO Phase 1 Features:

- Landing Page
- Log-In/Register Page
- Home Page
- Song Page
- Album Page
- Artist Page
- Record Label Page
- Playlist Page
- Playlist Import/Export Pages
- Legal Pages (ToC, Privacy Policy, About Us, FAQ, etc.)
  
MCO Phase 2 Features:
- Database using MongoDB
- JavaScript functionality
- Connection of pages to each other

NOTES:
- app.js                  --> allows connection to node.js and server
- /views/_____.ejs        --> the separate .html files converted to .ejs
- /views/layouts/         --> folder containing all possible different page layouts
                             --> contains HTML5 boiler code which can be changed if needed such as for example, if different pages need different css files, then a new .ejs file will facilitate that
- /views/layouts/main.ejs --> main file that contains regular HTML5 boiler code
- /server/routes/main.js  --> connects express to all pages
                             --> also facilitates routing of different pages, along with the changes in page title and description as needed by diff pages
- package.json            --> packages all files together into one cohesive package

MCO Phase 3 To-Do:
- CSS and EJS polishing
- Proper content recommendations and filtering (tentative)
- Log-In and Register
- Rate and Review
- Deployment (as an actual website)
- User information hashing (username and password)
