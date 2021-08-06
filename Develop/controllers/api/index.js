const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

//TODO: change to appropriate folder names for routes
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
