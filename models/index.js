const User = require('./User');
const Project = require('./Project');
const Comment = require('./Comment');
// A user can own many projects
User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// A user can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// A project is always owned by one user
Project.belongsTo(User, {
    foreignKey: 'user_id'
});
// A project can reference many users as a collaborator
Project.hasMany(User, {
    foreignKey: 'collaborator'
});
// A comment always belongs to one user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
// A comment always belongs to one project
Comment.belongsTo(Project, {
    foreignKey: 'project_id'
});


module.exports = { User, Project, Comment };