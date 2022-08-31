const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Collaborator extends Model {}

Collaborator.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // This is referencing the project that is involved in this instance of collaboration
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'project',
        key: 'id',
        unique: false
      }
    },
    // This is not the same user id as the one that references the owner of the project
    // This is referencing the user who is collaborating with the above project listed
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'collaborator',
  }
);

module.exports = Collaborator;
