const sendEmail  = async(email)=>{
    console.log('sending email to ', email);

await new Promise((resolve)=>{
    setTimeout(resolve,2000);
    console.log("email sent to:" , email);
});

}


module.exports = {sendEmail}