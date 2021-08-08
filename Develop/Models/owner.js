

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class owner extends Model {}

owner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    petName: {
      type: DataTypes.STRING,
    },
    preferredPark: {
      type: DataTypes.STRING,
    },
  },
 
    {
    sequelize,
    freezeTableName: true,
    // underscored: true,
    modelName: 'owner',
    }
);

module.exports = owner;
