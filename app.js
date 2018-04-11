var fs = require('fs');
var http = require('http');
var express = require('express');

console.log('Getting started!');

var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/', function(req, res){
  console.log('Request was made: ' + req.path);
  res.render('index');
})

app.get('/home', function(req, res){
  console.log('Request was made: ' + req.path)
  console.log('Redirecting...');
  res.redirect('/');
})

app.get('*', function(req, res){
  console.log('Request was made: ' + req.path)
  console.log('Sending 404 page...')
  res.render('404');
})

app.listen(3000);
console.log('Now listening on port 3000!');
