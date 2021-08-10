const express = require('express');
const router = express.Router();
const db = require('../../models');

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

router.post("/",(req,res)=>{
    if(!req.session?.user?.id){
        res.status(401).json({message:"Please login first."})
    } else {

        db.Friend.create({
            name:req.body.name,
            type:req.body.type,
            breed:req.body.breed,
            size:req.body.size,
            temperament:req.body.temperament,
            activitylevel:req.body.activitylevel,
            playswithothers:req.body.playswithothers,
            OwnerId:req.session.user.id,

        }).then(friendData=>{
            res.json(friendData);
        }).catch(err=>{
            console.log(err)
            res.status(500).json({
                message:"Oh no!",
                error:err
            })
        })
    }
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

router.delete("/:id",(req,res)=>{
    if(!req.session?.user?.id){
        res.status(401).json({message:"please login first."})
    } else {
       db.Friend.destroy({
           where:{
               id:req.params.id,
               OwnerId:req.session.user.id
           }
       }).then(delFriend=>{
           if(delFriend){
               res.json({
                   message:"Friend deleted :("
               });
            } else {
                res.status(400).json({message:"Friend not deleted, it either does not exist or you did not create it."})
            }
       }).catch(err=>{
        console.log(err)
        res.status(500).json({
            message:"Oh no!",
            error:err
        })
    })
    }
})

module.exports = router;