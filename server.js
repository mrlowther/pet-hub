const express = require("express");
const app = express();
require("dotenv").config();
const sequelize = require("./config/connection")
const path = require("path");
const PORT = process.env.PORT || 3000;

app.get("/",(req,res) => {
    console.log(req.method,req.url)
    res.send("Welcome to Pet Hub!")
});

sequelize.sync({force:true}).then(()=>{
    app.listen(PORT,function(){
        console.log(`App listening on PORT ${PORT}`)
    });
})



    
