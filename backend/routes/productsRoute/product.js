// importing express module 
const express=require('express')
// importing router method avalable in express module 
const routes=express.Router()
// importing check role 
const checkRole= require('../../services/checkRole')
const authenticateToken = require('../../services/authenticateToken');
const addProductController = require('../../controllers/productController/addProductController');
const getProductController = require('../../controllers/productController/getProductController');


// add product controller 
routes.post('/addProduct',addProductController);

// get products 
routes.get('/getProduct',getProductController);





module.exports=routes