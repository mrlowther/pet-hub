const express = require("express");
const app = express();
var PORT = 3000;

app.get("/",(req,res) => {
    console.log(req.method,req.url)
    res.send("Welcome to Pet Hub!")
});

app.listen(PORT,function(){
    console.log(`App listening on PORT ` + PORT)
});

