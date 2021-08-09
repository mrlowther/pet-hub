const express = require('express');
const router = express.Router();
const db = require('../../models');

// const db = require('../../models');
// const { User } = require('../../models');

router.get('/', (req, res)=>{
     db.Owner.findAll().then(ownerData=>{
         res.json(ownerData);
     }).catch(err=>{
         res.status(500).json({
             message:"Error!",
             error:err
         })
     })
})



// router.get("/",(req,res) => {
//     console.log(req.method,req.url)
//     res.send("Welcome to Pet Hub!")
//     });

router.get('/', (req, res)=>{
    db.Owner.findAll({
        include: [
            {
                model:db.Friend,
                // include:{}
            }
        ]
    }).then(ownerData=>{
        res.json(ownerData);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message:"Error!",
            error:err
        })
    })
    
})

router.get('/:id', (req, res)=>{
    db.Owner.findByPk(req.params.id, {
        include: [
            {
                model:db.Friend,
                // include:{}
            }
        ]
    }).then(ownerData=>{
        res.json(ownerData);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message:"Error!",
            error:err
        })
    })

    
})

module.exports = router;