const router = require('express').Router();
const { Project, User, Collaborator } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newCollaborator = await Collaborator.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newCollaborator);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;