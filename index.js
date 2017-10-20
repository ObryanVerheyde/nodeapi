const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const movies = require('./data.js');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/movies', function(request, response) {
  response.json(movies);
});

app.listen(3000);
