const db = require("../models");
const sequelize = require("../config/connection");

console.log(db);
console.log(sequelize);

const seedDb = async ()=>{
    await sequelize.sync({force: true});
    await db.Owner.bulkCreate([
        {
            userName:"Michael",
            email:"michael@michael.com",
            password:"password1",
            petName:"JoJo",
            preferredPark:"Westcrest Park"
        },
        {
            userName:"Darren",
            email:"darren@darren.com",
            password:"password2",
            petName:"Java",
            preferredPark:"Golden Gardens"
        },
        {
            userName:"Tino",
            email:"tino@tino.com",
            password:"password3",
            petName:"Perro",
            preferredPark:"Genessee Park"
        },
        {
            userName:"Jeff",
            email:"jeff@jeff.com",
            password:"password4",
            petName:"Byte",
            preferredPark:"Dr. Jose Rizal Park"
        },
        {
            userName:"Joe",
            email:"joe@joe.joe",
            password:"password5",
            petName:"Lacroix",
            preferredPark:"Westcrest Park"
        },
        {
            userName:"Louis",
            email:"louis@louis.louis",
            password:"password6",
            petName:"Jerome",
            preferredPark:"Golden Gardens"
        },
        {
            userName:"Kevin",
            email:"kevin@kevin.com",
            password:"password7",
            petName:"DaeHo",
            preferredPark:"Genessee Park"
        },
        { 
            userName:"Meghan",
            email:"meghan@meghan.com",
            password:"password8",
            petName:"Rapinoe",
            preferredPark:"Dr. Jose Rizal Park"
        },
    ], {
        individualHooks:true
    })
    await db.Friend.bulkCreate([
        {
            name:"JoJo",
            type:"Dog",
            breed:"Maltese",
            size:"small",
            temperament:"medium",
            activitylevel:"standard",
            playswithothers:"well",
            OwnerId: 1
        },
        {
            name:"Java",
            type:"Dog",
            breed:"Bulldog",
            size:"medium",
            temperament:"medium",
            activitylevel:"chill",
            playswithothers:"well",
            OwnerId: 2
        },
        {
            name:"Perro",
            type:"Dog",
            breed:"Newfoundland",
            size:"large",
            temperament:"mild",
            activitylevel:"chill",
            playswithothers:"well",
            OwnerId: 3
        },
        {
            name:"Byte",
            type:"Dog",
            breed:"Beagle",
            size:"small",
            temperament:"mild",
            activitylevel:"chill",
            playswithothers:"well",
            OwnerId: 4
        },
        {
            name:"Lacroix",
            type:"Dog",
            breed:"Border Collie",
            size:"medium",
            temperament:"medium",
            activitylevel:"standard",
            playswithothers:"well",
            OwnerId: 5
        },
        {
            name:"Jerome",
            type:"Dog",
            breed:"Samoyed",
            size:"large",
            temperament:"medium",
            activitylevel:"hyped",
            playswithothers:"well",
            OwnerId: 6
        },
        {
            name:"DaeHo",
            type:"Dog",
            breed:"Pug",
            size:"small",
            temperament:"medium",
            activitylevel:"standard",
            playswithothers:"well",
            OwnerId: 7
        },
        {
            name:"Rapinoe",
            type:"Dog",
            breed:"Greyhound",
            size:"large",
            temperament:"mild",
            activitylevel:"standard",
            playswithothers:"well",
            OwnerId: 8
        },
    ])

    process.exit(0);
}

seedDb();