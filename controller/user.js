const {user:Users} = require('../models/dbhelper');
const bcrypt = require('bcrypt');
const {generateToken}= require('../utils/jwt')

exports.signup = async(req,res)=>{
     try {
        const {name ,email,phone,password,dateOfBirth,role}= req.body;
        let  user = await Users.findOne({where:{email,isDeleted:false}});
        if(user){
          return  res.status(409).json({message :'Email already Exists'});
        }
        const haspass = await bcrypt.hash(password ,10);

       user = await Users.create({
        name,
        email,
        phone,
        password:haspass,
        dateOfBirth,
        role
       })
       return res.status(400).json({message: 'user registered successfully'});
    } catch (error) {
        return res.status(500).json(error.message);
     }
}


exports.login = async(req,res)=>{
  try {
   const {email , password} = req.body;
   const user =  await Users.findOne({where:{email,isDeleted:false},raw:true});
   if(!user){
      return res.status(404).json({message:'User not found'});
   }
   const is_match  = bcrypt.compare(password,user.password);
    if(!is_match){
      return res.status(404).json({message: 'invalid credintial !!'});
    }
    const token  = generateToken({id:user.user_id})
    delete user.password;
    const{isDeleted,deletedAt,updatedAt,...userr}=user;
    res.status(200).json({token,user:userr});
   
  } catch (error) {
   res.status(500).json(error.message);
  }
}

exports.getUser = async(req, res)=>{
   try {
      const id= req.user.user_id;
      const user = await Users.findOne({where:{user_id: id,isDeleted:false},attributes:{exclude:['password','isDeleted','deletedAt','createdAt','updatedAt']}});
      if(!user) return res.send(404).json({msg:'user not found!!'})
      
      return res.status(200).json(user)
   } catch (error) {
return res.status(500).json(error.message)   
   }
}