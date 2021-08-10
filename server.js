const express = require("express");
const app = express();
require("dotenv").config();
const sequelize = require("./Develop/config/connection");
const path = require("path");
const db = require("./develop/models")
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3000;



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

const allRoutes = require('./develop/controllers');
app.use(allRoutes);


sequelize.sync({force:false}).then(()=>{
    app.listen(PORT,function(){
        console.log(`App listening on PORT ${PORT}`)
    });
})
