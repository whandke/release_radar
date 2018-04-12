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
      
    app.get('*', function(req, res){
        console.log('Unhandled request was made: ' + req.path);
        console.log('Sending 404 page...');
        res.render('404');
      })

}