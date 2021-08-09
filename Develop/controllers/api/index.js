const express = require('express');
<<<<<<< HEAD
const router = require('express').Router();
=======
const router = express.Router();
>>>>>>> develop
const ownerRoutes = require('./ownerRoutes');


//TODO: change to appropriate folder names for routes
router.use('/owners', ownerRoutes);



module.exports = router;
