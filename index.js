const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("views", "views");
app.set("view engine", "ejs");

const data = require('./data/images.json');

app.get('/', function(req, res){
  res.render('home', {
  });
});

app.get('/portfolio', function(req, res){
  res.render('portfolio', {
    images: data.images
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
  });
});

app.get('/detail', function(req, res){
  res.render('detail', {
  });
});


app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'));
