const { raw } = require('mysql');
const models = require('../models/dbhelper');
const { screen:Screen } = require('../models/dbhelper');
const { theater:Theaters } = require('../models/dbhelper');

exports.createScreen = async (req, res) => {

    try {
        const { screen_no,total_seats,screen_type } = req.body;
        const theater_id=req.params.Tid;

        if (req.user.role != 'vendor' && req.user.role != 'admin') {
            return res.status(401).send('you are not permitted');
        }
       const Theater=await Theaters.findOne({where:{theater_id,owner_id:req.user.user_id,isDeleted:false}});
       if(!Theater) return res.status(403).json({msg:"not authorized!!"})

       const already_created_screen  = await Screen.findOne({where:{theater_id,screen_no,isDeleted:0}});
       if(already_created_screen){
        return res.status(409).json("screen already exists!!")
       }
 const screeen=await Screen.create({...req.body,theater_id});
 console.log(screeen);
        res.status(200).json({msg:"screen create successfully !!"},screeen)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

exports.updateScreen = async (req, res) => {

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