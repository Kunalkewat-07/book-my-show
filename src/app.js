const express   = require('express');
const dotenv = require('dotenv').config();
const auth_rout  = require('./routes/authRout');
const sequelize  = require('./config/db')
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('hellooo');
});

app.use('/api',auth_rout)

const start_server = async () => {
try {
    await sequelize.authenticate();
    console.log('db connected');

     app.listen(PORT, () => {
        console.log(`server is running at http://localhost:${PORT}`);
    });
} catch (error) {
    console.log('unable to connect with db', error);
}  
}

start_server();

