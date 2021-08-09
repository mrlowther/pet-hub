const Owner = require('./owner');
const Friend = require('./friend');

Owner.hasMany(Friend, {
    onDelete:"CASCADE",
    foreignKey:{
        allowNull: false
    }
});
Friend.belongsTo(Owner);



module.exports = {
    Owner,
    Friend
}