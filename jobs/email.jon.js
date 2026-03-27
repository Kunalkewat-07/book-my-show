const emailQueue  =require('../queues/email.queue');

const addEmailJOb   = async(data) =>{
    console.log('11111111');
   const job= await emailQueue.add('sendmail',data,{
        attempts: 3,
        delay: 5000,
    })
 console.log(job);
}

module.exports = {addEmailJOb}