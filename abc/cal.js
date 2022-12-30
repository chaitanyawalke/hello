const express=require("express");
var app=express();
var m1=require("./module");
var bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

app.get("/home",function(req,resp){
    resp.send("<h2> welcome to calc</h2>");
});

app.get("/displayfrom",function(req,resp){
   
    resp.sendFile("public/addition.html",{root:__dirname})
});

app.get("/submit_data",function(req,resp){
    if(req.query.btn==="add")
    {
        var n1=req.query.num1;
    var n2=req.query.num2;
    var ans=m1.add(n1,n2);
    resp.send("<h4> ans :"+ans+"</h4>");
   }else if(req.query.btn==="sub")
   {
    var n1=req.query.num1;
    var n2=req.query.num2;
    var ans=m1.sub(n1,n2);
    resp.send("<h5> ans :"+ans+"</h5>");
   }else if(req.query.btn==="mul")
   {
    var n1=req.query.num1;
    var n2=req.query.num2;
    var ans=m1.mul(n1,n2);
    resp.send("<h6> ans : "+ans+"</h6>");
   }else if(req.query.btn==="div")
   {
     var n1=req.query.num1;
    var n2=req.query.num2;
    var ans=m1.div(n1,n2);
    resp.send("<h6> ans : "+ans+"</h6>");

   }

   
})
app.listen(3000)
console.log("server are runnig in port 3000");