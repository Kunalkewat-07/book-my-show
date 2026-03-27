const {Worker} = require('bullmq');
// const connection = require('../config/bullRedis');
const { sendEmail } = require('../services/email.service');
// const {sendEmail} = require('../services/email.service')

const worker= new Worker('emailQueue',async(job)=>{
    console.log(job.name);
    const {email}  = job.data;
    console.log(email);
    await sendEmail(email)
} ,{connection: {   host: "127.0.0.1",
    port: 6379}})



worker.on("completed",(job)=>{
console.log(`job  complete ${job.id}`);
})

worker.on('failed',(job,err)=>{
    console.log(`job failed: ${job.id}`,err.message);
})

module.exports ={worker}
