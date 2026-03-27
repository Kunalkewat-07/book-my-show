
const {user:Users} = require('../models/dbhelper');
const bcrypt = require('bcrypt');
const {generateToken}= require('../utils/jwt')
const catchAsync = require('../utils/catchAsync')
const redis = require('redis');
const moment = require('moment');
const { sendOtpEmail } = require('../services/mail.service');
const {redisClient} =  require('../config/redis.js');
const { verify } = require('../config/mailer.js');
const { addEmailJOb } = require('../jobs/email.jon.js');
const {Op, QueryTypes} = require('sequelize');
const { sequelize } = require('../config/db.js');
const { SELECT } = require('sequelize/lib/query-types');
exports.signup = async(req,res)=>{
     try {
        let {name ,email,phone,password,dateOfBirth,role}= req.body;
      let user = await sequelize.query(`CALL checkUserWithEmailAndPhone(:email,:phone)`,{
         replacements: {
            email , phone
         },QueryTypes:SELECT
      })
     /*   let  user =  await Users.findOne({
         where:{
            [Op.or] : [
               {email: email},
               {phone: phone}
            ],
             isDeleted:false
         }
        })
         */
        if(user){
         if(user[0].status===1){
            return res.status(400).json({message: 'Email already exists'})
         }
         if(user[0].status===2){
            return res.status(400).json({message: 'Already registered with this phone no.'})
         }
        } 
        user = null;
        const haspass = await bcrypt.hash(password ,10);
       user = await Users.create({
        name,
        email,
        phone,
        password:haspass,
        dateOfBirth,
        role
       })

      
       await addEmailJOb({
         email: user.email,
         name: user.name
       })
       console.log("jayyyyyy")
       return res.status(200).json({message: 'user registered successfully'});
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
   const is_match  = await bcrypt.compare(password,user.password);
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

exports.sendOtp = catchAsync(async(req,res)=>{
   const {email} = req.body;
      const otp = Math.floor(100000 + Math.random() * 900000);
     console.log(otp);
     const expireTime = moment().add(5,'minutes')
   
      await redisClient.set(`otp:${email}`,otp.toString(),{
      EX:300
   } );
   //  sendOtpEmail(email,otp)
   res.status(200).json({
      msg: "otp sent",
      otp: otp,
      expiresAt: expireTime,
   })
})    

exports.verifyOtp = catchAsync(async(req, res)=>{
   const {otp,email} = req.body;
   const storedOTp =  await redisClient.get(`otp:${email}`);
   if(!storedOTp){
      return res.status(400).json({message: "OTP expired !!"
      })
   }
   console.log('otp',storedOTp);
   if(storedOTp!== otp.toString()){
      return res.status(400).json({message: "invalid OTP"});
   }
   await redisClient.del(`otp:${email}`);
   res.status(200).json({message: "otp verified"})
})
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