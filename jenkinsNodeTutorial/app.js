var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Worlds!");
});

app.listen(4000);