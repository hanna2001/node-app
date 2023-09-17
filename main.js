
const express = require("express");
var xmlparser = require('express-xml-bodyparser');

const app = express();
app.use(xmlparser());

app.get("/",function(req,res){
  res.send("I");
});
// Define routes here ...
app.post("/", function(req, res) {
    console.log(req.body)
    // var num1 = Number(req.body.num1);
    // var num2 = Number(req.body.num2);
      
    // var result = num1 + num2 ;
      
    res.send("req");
  });
  
app.listen(3000, function(){
  console.log("server is running on port 3000");
})