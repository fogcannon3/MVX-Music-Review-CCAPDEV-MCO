require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const expressLayout = require('express-ejs-layouts')

/* Connects to MongoDB using Mongoose */
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

/*adds the connection to the db vid4 (10:56)*/
const connectDB = require('./server/config/db');

const app = express();
const PORT = 5000 || process.env.PORT;

//Connect to DB
connectDB();

app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));

//Starts the server
app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT} `);
});