

const { Model, DataTypes } = require('sequelize');
const sequelize = require('./develop/config/connection');

class friend extends Model {}

friend.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    petName: {
      type: DataTypes.VARCHAR,
    },
    animalType: {
      type: DataTypes.VARCHAR,
    },
    animalBreed: {
      type: DataTypes.VARCHAR,
    },
    animalSize: {
      type: DataTypes.VARCHAR,
    },
    animalTemperament: {
        type: DataTypes.VARCHAR,
    },  
    activityLevel: {
        type: DataTypes.VARCHAR,
    },
    playsWithOthers: {
        type: DataTypes.VARCHAR,
    },
  },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'friend',
    }
);


module.exports = friend;
