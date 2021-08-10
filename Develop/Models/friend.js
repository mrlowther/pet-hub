const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
class Friend extends Model {}

Friend.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    breed: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,
    },
    temperament: {
        type: DataTypes.STRING,
    },  
    activitylevel: {
        type: DataTypes.STRING,
    },
    playswithothers: {
        type: DataTypes.STRING,
    },
  },
    {
    sequelize,
    }
);


module.exports = Friend;
