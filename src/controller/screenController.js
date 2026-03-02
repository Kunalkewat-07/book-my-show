// const models = require('../models/dbhelper');
const { raw } = require('express');
const { Screens } = require('../models/dbhelper');
const {Theaters } = require('../models/dbhelper');

exports.createScreen = async (req, res) => {

    try {
        const { screen_no,total_seats,screen_type } = req.body;
        const theater_id=req.params.Tid;
            console.log('hii');
        if (req.user.role != 'vendor' && req.user.role != 'admin') {
            return res.status(401).send('you are not permitted');
        }
        console.log("helloo");
       const Theater=await Theaters.findOne({where:{theater_id,owner_id:req.user.user_id,isDeleted:false},raw: true});
       if(!Theater) return res.status(403).json({msg:"not authorized!!"})
  console.log(Theater);
 const screeen=await Screens.create({...req.body,theater_id});
        res.status(200).json({msg:"screen create successfully !!"})
    } catch (err) {
        res.status(500).send(err.message);
    }
}

exports.updateScreen = async (req, res) => {

    try {

        const screen_id=req.params.sid;

        if (req.user.role != 'vendor' || req.user.role != 'admin') {
            return res.status(401).send('you are not permitted');
        }
               

        let screeen=await Screen.findOne({
            where:{screen_id,isDeleted:false},
            include:[
                {
                    model:Theaters,
                    as:'theater',
                    attributes:['owner_id'],
                    where:{
                        owner_id:req.user.user_id
                    }
                }
            ]
        })

        if(!screeen) return res.status(403).json({msg:"not authorized!!"});
        screeen=await screeen.update(req.body);

        res.status(200).json({msg:"screen update  successfully !!"})
    } catch (err) {
        res.status(500).send(err.message);
    }
}

exports.deleteScreen = async (req, res) => {

    try {

        const screen_id=req.params.sid;

        if (req.user.role != 'vendor' && req.user.role != 'admin') {
            return res.status(401).send('you are not permitted');
        }
               

        let screeen=await Screen.findOne({
            where:{screen_id,isDeleted:false},
            include:[
                {
                    model:Theaters,
                    as:'theater',
                    attributes:['owner_id'],
                    where:{
                        owner_id:req.user.user_id
                    }
                }
            ]
        })
console.log(req.user.user_id);
        if(!screeen) return res.status(403).json({msg:"not authorized!!"});
        screeen=await screeen.update({isDeleted:true,deletedAt:Date.now()});

        res.status(200).json({msg:"screen Deleted  successfully !!"})
    } catch (err) {
        res.status(500).send(err.message);
    }
}