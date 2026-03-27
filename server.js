
require('dotenv').config()
const express=require('express')
const app=express();
const port=process.env.PORT || 3000
const sequelize=require('./config/db')
const swagger = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const moment = require('moment-timezone')
const allRout = require('./router/index.route')
const { connectRedis } = require('./config/redis');
const {connectDb} = require('./config/db')
const {worker} = require('./workers/emailworker')

app.use('/api-docs',swagger.serve,swagger.setup(swaggerDocument))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',allRout)

app.get('/time',(req,res)=>{  
    res.send('<h1>welcome to bookmyshow </h1>')
})


// sequelize.authenticate().then(data => console.log("DB Connected"));

app.listen(port,()=>{
console.log(`server has started at http://localhost:${port}`);
});

connectRedis()
connectDb()