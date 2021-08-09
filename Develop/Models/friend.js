const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
class friend extends Model {}

friend.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    petName: {
      type: DataTypes.STRING,
    },
    animalType: {
      type: DataTypes.STRING,
    },
    animalBreed: {
      type: DataTypes.STRING,
    },
    animalSize: {
      type: DataTypes.STRING,
    },
    animalTemperament: {
        type: DataTypes.STRING,
    },  
    activityLevel: {
        type: DataTypes.STRING,
    },
    playsWithOthers: {
        type: DataTypes.STRING,
    },
  },
    {
    sequelize,
    freezeTableName: true,
    // underscored: true,
    modelName: 'friend',
    }
);


module.exports = friend;
