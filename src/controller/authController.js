const {Users} = require('../models/dbhelper')

// ---------------signup page----------------
exports.signup = async(req,res)=>{
     try {
        const {name ,email,phone,password,dateOfBirth}= req.body;
        let  user = Users.findOne({email})
        console.log(user);
        if(user){
          return  res.status(409).json({message :'Email already Exists'})
        }
       user = Users.create({
        name,
        email,
        phone,
        password,
        dateOfBirth,
       })
       return res.status(400).json({message: 'user registered successfully',user})
    } catch (error) {
        return res.status(500).json(error)
     }
}