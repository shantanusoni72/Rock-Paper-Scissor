var express = require('express');
var app = express();
var path = require('path')
var PORT = 3001;
var play = require('./js/play')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/game/start', function(req, res) {
    return res.json(play.play())
  })
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
}); 