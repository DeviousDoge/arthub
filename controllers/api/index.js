const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const projectRoutes = require('./projectRoutes');
const collaboratorRoutes = require('./collaboratorRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/projects', projectRoutes);
router.use('/collaborator', collaboratorRoutes)

module.exports = router;