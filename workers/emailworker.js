const {Worker} = require('bullmq');
const connection = require('../config/bullRedis');


const worker= new Worker('emailQueue',processor , {connection})