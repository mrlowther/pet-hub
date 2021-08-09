const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Owner extends Model {}

Owner.init(
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    },
    petName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preferredPark: {
      type: DataTypes.STRING,
    },
  },
 
    {
    sequelize,
    }
);

module.exports = Owner;
