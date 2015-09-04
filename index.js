var express = require("express");
var engines = require('consolidate');
var path = require('path')
var app = express();
var listener = app.listen(3000, function(){
    console.log('Listening on port ' + listener.address().port); 
});
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', engines.mustache);


app.get("/",function(req,res){
  res.render("index.html")
})

app.get("/about",function(req,res){
  res.render("about.html");
})

