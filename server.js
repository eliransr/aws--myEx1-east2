var port = process.env.PORT || 8080;
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello get request!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello post request!"
  });
});

app.listen(port);
module.exports = app;
