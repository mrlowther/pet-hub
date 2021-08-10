const express = require('express');
const router = express.Router();
const db = require('../../models');
const bcrypt = require("bcrypt");


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

router.post("/login", (req, res)=>{
    db.Owner.findOne({
        where: {
            email: req.body.email,
        }
        
    }).then(ownerData=>{
        if(!ownerData){
            res.status(403).json({
                message:"Invalid username or password."
            })
        } else {
            if(bcrypt.compareSync(req.body.password,ownerData.password)){
                req.session.user = {
                    id:ownerData.id,
                    userName:ownerData.userName,
                    email:ownerData.email
                }
                res.json(ownerData)
            } else {
                res.status(403).json({
                    message:"Invalid username or password."
                })
            }
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message:"Error!",
            error:err
        })
    })
})

router.get("/session", (req, res)=>{
    res.json({
        sessionData: req.session
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