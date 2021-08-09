const express = require('express');
const router = require('express').Router();
<<<<<<< HEAD
// const { User } = require('../../models');

module.exports = router; 
=======
const db = require('../models');


app.get('/', (req, res)=>{
    res.send('api');
})


module.exports = router;
>>>>>>> develop
