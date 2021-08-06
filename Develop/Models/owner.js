

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
      type: DataTypes.VARCHAR,
    },
    email: {
      type: DataTypes.VARCHAR,
    },
    petName: {
      type: DataTypes.VARCHAR,
    },
    preferredPark: {
      type: DataTypes.VARCHAR,
    },
  },
 
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'owner',
    }
);

module.exports = owner;
