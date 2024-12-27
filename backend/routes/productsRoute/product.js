// importing express module 
const express=require('express')
// importing router method avalable in express module 
const routes=express.Router()
// importing check role 
const checkRole= require('../../services/checkRole')
const authenticateToken = require('../../services/authenticateToken');
const addProductController = require('../../controllers/productController/addProductController');


// add product controller 
routes.post('/addProduct',addProductController);



module.exports=routes