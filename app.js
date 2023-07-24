require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const expressLayout = require('express-ejs-layouts')
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');

/*adds the connection to the db vid4 (10:56)*/
const connectDB = require('./server/config/db');

const app = express();
const PORT = 5000 || process.env.PORT;

//Connect to DB
connectDB();

//ADDED BY LEEROI, AS SEEN IN VIDEO 8, 1:15
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cookieParser());

// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUnitialized: true,
//     store: MongoStore.create({
//         mongoUrl: process.env.MONGODB_URI
//     }),
//     cookie: {maxAge: new Date (Date.now() + (3600000))}
// }))

app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));

//Starts the server
app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT} `);
});