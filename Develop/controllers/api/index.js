const express = require('express');
const router = require('express').Router();
const ownerRoutes = require('./ownerRoutes');


//TODO: change to appropriate folder names for routes
router.use('/owners', ownerRoutes);



module.exports = router;
