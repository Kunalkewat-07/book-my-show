const {Sequelize}=require('sequelize')

const env=process.env.NODE_ENV || 'development'
const connection=require('./config')[env]
const sequelize=new Sequelize(connection)

module.exports=sequelize;