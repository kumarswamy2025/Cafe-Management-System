const express=require('express');
const userSignupController = require('../../controllers/userControllers/userSignupController');
const UserSignInController = require('../../controllers/userControllers/userSigninController');
const passwordResetController = require('../../controllers/userControllers/passwardResetController');


var routes=express.Router();

// user route paths
// signup  route
routes.post('/signup',userSignupController)

// signin route

routes.post('/login',UserSignInController)

// password reset route

routes.post('/resetPassword',passwordResetController);

module.exports=routes;