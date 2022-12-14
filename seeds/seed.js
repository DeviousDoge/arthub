const sequelize = require('../config/connection');
const { User, Project, Comment, Collaborator } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const commentData = require('./commentData.json');
const collaboratorData = require('./collaboratorData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });



  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

for (const project of projectData){
  await Project.create({
    ...project,
    user_id: users[Math.floor(Math.random() * users.length)].id,
  });
}
await Collaborator.bulkCreate(collaboratorData);
await Comment.bulkCreate(commentData);
  process.exit(0);
};

seedDatabase();
