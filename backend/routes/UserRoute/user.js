const express=require('express');
const userSignupController = require('../../controllers/userControllers/userSignupController');
const UserSignInController = require('../../controllers/userControllers/userSigninController');
const passwordResetController = require('../../controllers/userControllers/passwardResetController');
const GettingAllAdminUserController = require('../../controllers/userControllers/GettingAllAdminUserControler');
const GettingAllUserController = require('../../controllers/userControllers/GettingAllUserControoler');
const statusController = require('../../controllers/userControllers/statusController');
const authenticateToken = require('../../services/authenticateToken');


var routes=express.Router();

// user route paths
// signup  route
routes.post('/signup',userSignupController)

// signin route

routes.post('/login',UserSignInController)

// password reset route

routes.post('/resetPassword',authenticateToken,passwordResetController);

// getting all  users with role=admin
routes.get('/adminUsers',authenticateToken,GettingAllAdminUserController)

// getting all  users with role=user
routes.get('/allUsers',authenticateToken,GettingAllUserController)

// status update route 
routes.patch('/updateStatus',authenticateToken,statusController)

//verifying token  route 
routes.get('/checkToken',authenticateToken);



module.exports=routes;