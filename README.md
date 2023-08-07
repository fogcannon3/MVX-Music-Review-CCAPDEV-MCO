# MVX-MCO
CCAPDEV MCO - Fulcher, Sang, Villamiel

WHEN RUNNING ON LOCAL MACHINE:
1. Download as ZIP from GitHub website
2. Unzip .zip file
3. Open folder as workspace on Visual Studio Code
4. GO TO: Terminal > New Terminal and TYPE: "npm install"
5. Let the dependencies be installed
6. Once done, TYPE: "node app.js"
7. Go to an internet browser
8. TYPE: localhost:5000
9. Enjoy

FOR OUR CCAPDEV PROFESSOR: An invite to join our MongoDB database has been sent for you to add your IP address to the list of addresses that may access our database and website

NOTES:
- app.js                  --> allows connection to node.js and server
- /views/_____.ejs        --> the separate .html files converted to .ejs
- /views/layouts/         --> folder containing all possible different page layouts
                             --> contains HTML5 boiler code which can be changed if needed such as for example, if different pages need different css files, then a new .ejs file will facilitate that
- /views/layouts/main.ejs --> main file that contains regular HTML5 boiler code
- /server/routes/main.js  --> connects express to all pages
                             --> also facilitates routing of different pages, along with the changes in page title and description as needed by diff pages
- package.json            --> packages all files together into one cohesive package
