const express = require('express');

const router = express.Router();

const ownerRoutes = require('./ownerRoutes');
const friendRoutes = require('./friendRoutes');


//TODO: change to appropriate folder names for routes
router.use('/owners', ownerRoutes);
router.use('/friends', friendRoutes);



module.exports = router;
