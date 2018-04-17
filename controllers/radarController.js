const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://app:test@ds129926.mlab.com:29926/radar');

let gameSchema = new mongoose.Schema({
  title: String,
  studio: String,
  publisher: String,
  date: String
})

let Games = mongoose.model('Game', gameSchema);

module.exports = function(app){

  app.get('/', function(req, res){
      res.render('index');
  })
      
  app.get('/home', function(req, res){
      res.redirect('/');
  })

  app.get('/games', function(req, res){
    if(req.query.search){
      Games.find({title: new RegExp(req.query.search, "i")}, function(err, data){
        if(err) throw err;
        res.render('games', {games: data});
      })
    }
    else {
      Games.find({}, function(err, data){
        if(err) throw err;
        res.render('games', {games: data});
      })
    }
    
  })

  app.get('/add', function(req, res){
    res.render('add');
  })

  app.post('/add', function(req, res){
    let newGame = Games(req.body).save(function(err, data){
      if(err) throw err;
      res.render('games');
    })
  })
      
  app.get('/contact', function(req, res){
    res.render('contact');
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