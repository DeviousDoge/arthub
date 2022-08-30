const User = require('./User');
const Project = require('./Project');
const Comment = require('./Comment');
const Collaborator = require('./Collaborator')
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
Project.belongsToMany(User, {
    through: {
        model: Collaborator,
        unique: false
    }
});
// A user can reference many projects as a collaborator
User.belongsToMany(Project, {
    through: {
        model: Collaborator,
        unique: false
    }
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