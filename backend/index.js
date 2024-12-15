// importing express module
const express=require('express')
// importing cors module
var cors=require('cors')
// importing connectDB file to establish database connection
const connectDB=require('./connectDB');
// assigninng the express  variable (it contains alll the express module) to app variable
const app=express()
// configuring cors with backend application
app.use(cors())
// configuring backend application to accept urls from front end
app.use(express.urlencoded({extended:true}))
// // configuring backend application to accept json data comming  from front end
app.use(express.json())




// exporting app variable 
module.exports=app;