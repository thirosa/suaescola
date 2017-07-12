var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return next();
});

app.use(express.static(__dirname + './../client'));

app.listen(3000, '0.0.0.0', function() {
  console.log("servidor aberto na porta 3000");
});