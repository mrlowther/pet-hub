const express = require("express");
const app = express();
<<<<<<< HEAD
var PORT = 3000;
=======
require("dotenv").config();
const sequelize = require("./develop/config/connection")
const path = require("path");
const PORT = process.env.PORT || 3000;
>>>>>>> develop

app.get("/",(req,res) => {
    console.log(req.method,req.url)
    res.send("Welcome to Pet Hub!")
});

<<<<<<< HEAD
app.listen(PORT,function(){
    console.log(`App listening on PORT ` + PORT)
});

=======
sequelize.sync({force:true}).then(()=>{
    app.listen(PORT,function(){
        console.log(`App listening on PORT ${PORT}`)
    });
})



    
>>>>>>> develop
