var fs = require('fs');
var http = require('http');
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

console.log('Getting started!');

var app = express();
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
app.use(favicon(__dirname + '/favicon.ico'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', function(req, res){
  console.log('Request was made: ' + req.path);
  res.render('index');
})

app.get('/home', function(req, res){
  console.log('Request was made: ' + req.path);
  console.log('Redirecting...');
  res.redirect('/');
})

app.get('/contact', function(req, res){
  res.render('contact');
})

app.post('/search', function(req, res){
  var data = req.body;
  res.render('search', {data: data});

})

app.get('*', function(req, res){
  console.log('Request was made: ' + req.path);
  console.log('Sending 404 page...');
  res.render('404');
})

app.listen(3000);
console.log('Now listening on port 3000!');
