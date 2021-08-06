const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.get("/",(req,res) => {
    console.log(req.method,req.url)
    res.send("Welcome to Pet Hub!")
});

app.listen(PORT,function(){
    console.log(`App listening on PORT ${PORT}`)
});
    
