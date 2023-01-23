require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();

//set up dinamic views
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
//set up static public files
app.use(express.static(__dirname + '/public'));

//just to connect the routes.config.js:
const router = require("./config/routes.config");
app.use(router);

app.listen(3000, () => console.log('My Spotify project running on port 3000 🎧 🥁 🎸 🔊'));
