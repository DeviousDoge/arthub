const router = require('express').Router();
const { Project, Comment, Collaborator, User } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const projectData = await Project.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        // Serialize data so the template can read it
        const projects = projectData.map((project) => project.get({ plain: true }));


        res.render("profilepage", {
            //   projects, 
            //   logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/project/:id', async (req, res) => {
    try {
        const projectData = await Project.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const project = projectData.get({ plain: true });

        res.render('commentpage', {
            ...project,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router
