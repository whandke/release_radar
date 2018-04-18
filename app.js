const fs = require('fs');
const http = require('http');
const express = require('express');
const favicon = require('serve-favicon');
const radarController = require('./controllers/radarController');

console.log('Getting started!');

let app = express();

//Set up rendering engine
app.set('view engine', 'ejs');

//Static files
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

//Fire up controllers
radarController(app);

//Listen to port
app.listen(process.env.port || 3000);
console.log('Now listening on port 3000!');
