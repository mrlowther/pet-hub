const Owner = require('./owner');
const Friend = require('./friend');

Owner.hasMany(Friend, {
    onDelete:"CASCADE"
});
Friend.belongsTo(Owner);



module.exports = {
    Owner,
    Friend
}