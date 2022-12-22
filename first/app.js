var express = require("express");
var app = express();

app.get("/",function(req,resp){

    resp.send("<h1> hi chaitanya </h1>");
    resp.end();
})
app.listen(3000);
console.log("port are running in 3000 port");

