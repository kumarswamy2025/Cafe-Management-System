// importing express module
const express=require('express')
// importing cors module
var cors=require('cors')
// importing connectDB file to establish database connection
const connectDB=require('./connectDB');

// importing user route  here
const userRoute=require('./routes/UserRoute/user');


// assigninng the express  variable (it contains alll the express module) to app variable
const app=express()
// configuring cors with backend application
app.use(cors())
// configuring backend application to accept urls from front end
app.use(express.urlencoded({extended:true}))
// // configuring backend application to accept json data comming  from front end
app.use(express.json())

// this is user route start point 
app.use('/user',userRoute)





// exporting app variable 
module.exports=app;