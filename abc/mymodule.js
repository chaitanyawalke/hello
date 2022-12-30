const express=require("express");
 var app=express();
 var m2=require("./module2");
 var bodyparser=require("body-parser");

 app.use(bodyparser.urlencoded({extended:false}));

 app.get("/home",function(req,resp){
    resp.send("<h1> welcome to chart </h1>");
 });

 app.get("/displayform",function(req,resp){
    resp.sendFile("public/form.html",{root:__dirname});
 });

 app.get("/submit_data",function(req,resp){
    var n1=parseInt(req.query.num);
    console.log("n1"+n1);
   if(req.query.btn==="data")
   {
      if(n1<5)
      {
        var ans=m2.fact(n1);
        resp.send("<h2> ans :"+ans+" </h2>");
      }else if(n1>=5 && n1<10)
      {
        var ans=m2.table(n1);
        resp.send("<h3> ans :"+ans +"</h3>");
      }else
      {
         var ans=m2.prime(n1);
         if(ans===1){
         resp.send("<h4>the no is prime no :"+n1+"</h4>");
         }
      else{
         resp.send("<h4>the no is Not  prime no :"+n1+"</h4>");
      }
      }
   }
 })
 app.listen(3000)
 console.log("server are running in 3000 port");