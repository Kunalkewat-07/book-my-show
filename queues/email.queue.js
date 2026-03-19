const {Queue} = require('bullmq');
const connection  = require('../config/bullRedis');

const emailQueue = new Queue('emailQueue',{connection});
module.exports = emailQueue;