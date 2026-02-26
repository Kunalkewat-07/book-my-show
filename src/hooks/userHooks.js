const bcrypt = require('bcrypt')

module.exports = (User)=>{
 User.beforeCreate(async(user)=>{
    console.log(user);
    const haspass = await bcrypt.hash(user.password, 10);
    user.password = haspass
 })   
}