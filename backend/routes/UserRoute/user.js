const express=require('express');
const userSignupController = require('../../controllers/userControllers/userSignupController');


var routes=express.Router();

// user route paths

routes.post('/signup',userSignupController)


module.exports=routes;