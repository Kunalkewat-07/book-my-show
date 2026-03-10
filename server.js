
require('dotenv').config()
const express=require('express')
const app=express();
const port=process.env.PORT || 3000
const sequelize=require('./config/db')
const swagger = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

const userRout=require('./router/user')
const movieRout=require('./router/movie')
const theaterRout=require('./router/theater');
const cityRout=require('./router/city');
const seatRout=require('./router/saet')

app.use('/api-docs',swagger.serve,swagger.setup(swaggerDocument))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('<h1>HELLO BROTHER !! </h1>')
})



app.use('/api/auth',userRout)
app.use('/api/movie',movieRout)
app.use('/api/theater',theaterRout)
app.use('/api/city',cityRout)
app.use('/api/seat',seatRout)

async function startserver() {
    try {
        await sequelize.authenticate();
app.listen(port,()=>{
    console.log(`server has started at http://localhost:${port}`);
})
    } catch (error) {
        console.log(error)
    }
}

startserver();
