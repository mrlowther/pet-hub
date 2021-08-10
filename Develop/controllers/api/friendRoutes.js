const express = require('express');
const router = express.Router();
const db = require('../../models');


// app.get('/', (req, res)=>{
//     res.send('api');
// })

router.get('/', (req, res)=>{
    db.Friend.findAll({
        include: [
            {
                model:db.Owner,
                // include:{}
            }
        ]
    }).then(friendData=>{
        res.json(friendData);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message:"Error!",
            error:err
        })
    })
    
})

router.get('/:id', (req, res)=>{
    db.Friend.findByPk(req.params.id, {
        include: [
            {
                model:db.Owner,
                // include:{}
            }
        ]
    }).then(friendData=>{
        res.json(friendData);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message:"Error!",
            error:err
        })
    })
    
})

module.exports = router;