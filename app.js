const fs = require('fs');
const http = require('http');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

console.log('Getting started!');

let app = express();
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
app.use(favicon(__dirname + '/favicon.ico'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', function(req, res){
  res.render('index');
})

app.get('/home', function(req, res){
  res.redirect('/');
})

app.get('/contact', function(req, res){
  res.render('contact');
})

app.post('/search', function(req, res){
  res.render('search', {data: req.body});
})

app.get('*', function(req, res){
  console.log('Unhandled request was made: ' + req.path);
  console.log('Sending 404 page...');
  res.render('404');
})

app.listen(3000);
console.log('Now listening on port 3000!');
