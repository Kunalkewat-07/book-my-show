const IORedis = require('ioredis');

const bullConnection = new IORedis(process.env.REDIS_URL,);


module.exports = bullConnection;