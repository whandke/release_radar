const fs = require('fs');
const http = require('http');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const radarController = require('./controllers/radarController');

console.log('Getting started!');

let app = express();
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
app.use(favicon(__dirname + '/favicon.ico'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

radarController(app);

app.listen(3000);
console.log('Now listening on port 3000!');
