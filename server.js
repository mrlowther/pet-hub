const express = require("express");
const app = express();
require("dotenv").config();
const sequelize = require("./Develop/config/connection");
// const path = require("path");
const db = require("./develop/models")
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const allRoutes = require('./develop/controllers');

app.use(allRoutes);


sequelize.sync({force:false}).then(()=>{
    app.listen(PORT,function(){
        console.log(`App listening on PORT ${PORT}`)
    });
})
