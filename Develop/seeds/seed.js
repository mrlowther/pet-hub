const db = require("../models");
const  sequelize = require("../config/connection");

console.log(db);
console.log(sequelize);

const seedDb = async ()=>{
    await sequelize.sync({force: true});
    await db.Owner.bulkCreate([
        {
            username:"Michael",
            email:"michael@michael.com",
            password:"password1",
            petname:"JoJo",
            preferredPark:"Westcrest Park"
        },
        {
            username:"Darren",
            email:"darren@darren.com",
            password:"password2",
            petname:"Java",
            preferredPark:"Golden Gardens"
        },
        {
            username:"Tino",
            email:"tino@tino.com",
            password:"password3",
            petname:"Perro",
            preferredPark:"Genessee Park"
        },
        {
            username:"Jeff",
            email:"jeff@jeff.com",
            password:"password4",
            petname:"Byte",
            preferredPark:"Dr. Jose Rizal Park"
        },
        {
            username:"Joe",
            email:"joe@joe.joe",
            password:"password5",
            petname:"Lacroix",
            preferredPark:"Westcrest Park"
        },
        {
            username:"Louis",
            email:"louis@louis.louis",
            password:"password6",
            petname:"Jerome",
            preferredPark:"Golden Gardens"
        },
        {
            username:"Kevin",
            email:"kevin@kevin.com",
            password:"password7",
            petname:"DaeHo",
            preferredPark:"Genessee Park"
        },
        { 
            username:"Meghan",
            email:"meghan@meghan.com",
            password:"password8",
            petname:"Rapinoe",
            preferredPark:"Dr. Jose Rizal Park"
        },
    ])
    process.exit(0);
}

seedDb();