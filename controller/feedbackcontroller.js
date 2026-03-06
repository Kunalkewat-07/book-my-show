const {feedback:Feedbacks} = require('../models/dbhelper');
exports.createfeedBack = async(req, res)=>{
    try {
        console.log(req.user);
        const {movie_id,rating,comment} = req.body
        console.log('hii');
        console.log(Feedbacks);
        await Feedbacks.create({user_id:req.user.user_id,movie_id,rating,comment})
        res.status(200).json({msg: "thanks for rating"})
    } catch (error) {
        res.status(500).json(error.message)
        console.log(error.message);
    }
}


exports.deletefeedBack = async(req, res)=>{
try {
    const {fid} = req.params
    if(req.user.role!='admin'){
        return res.status(403).json({message:'No Permisson'})
    }
    const feedback = await Feedbacks.findByPk(fid);
    if(!feedback){
        return res.status(404).json({message: 'not found'});
    }
  await feedback.update({isDeleted: 1})
  res.status(200).json({message: "feedback deleted"})
} catch (error) {
    res.status(500).json(error.message)
}
}


exports.updatefeedBack = async(req, res)=>{
    try {
        const {fid} = req.params;
    const feedback = await Feedbacks.findByPk(fid);
     if(!feedback){
        return res.status(404).json({message: 'not found'});
    }
    if(feedback.user_id!== req.user.user_id){
        return res.status(403).json({message: "no permission"});
    }

    await feedback.update(req.body)
    res.status(200).json({message: "updated successfully"});

    } catch (error) {
    res.status(400).json(error.message)
    }
}