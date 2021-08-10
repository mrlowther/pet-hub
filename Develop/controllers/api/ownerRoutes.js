const express = require('express');
const router = express.Router();
const db = require('../../models');


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

router.post("/", (req, res)=>{
    db.Owner.create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        // petName: req.body.petName
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