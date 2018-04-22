var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//ROUTE

app.get("/", function(req, res){
   res.render("landing");
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Color Game Server Started"); 
});