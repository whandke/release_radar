const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://app:test@ds129926.mlab.com:29926/radar');

let gameSchema = new mongoose.Schema({
  name: String,
  year: String
})

let Game = mongoose.Model('Game', gameSchema);

module.exports = function(app){

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

  app.get('/about', function(req, res){
      res.render('about');
    })
      
  app.get('*', function(req, res){
      console.log('Unhandled request was made: ' + req.path);
      console.log('Sending 404 page...');
      res.render('404');
    })

}