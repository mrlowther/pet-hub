const express = require('express');
const router = require('express').Router();


const db = require('../models');


app.get('/', (req, res)=>{
    res.send('api');
})


module.exports = router;