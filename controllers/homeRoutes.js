const router = require('express').Router();
// const { Project, Comment, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get("/",(req, res) => {
res.render("profilepage")
})
module.exports=router