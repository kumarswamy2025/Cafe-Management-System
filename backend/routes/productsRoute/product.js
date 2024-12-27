// importing express module 
const express=require('express')
// importing router method avalable in express module 
const routes=express.Router()
// importing check role 
const checkRole= require('../../services/checkRole')
const authenticateToken = require('../../services/authenticateToken');
const addProductController = require('../../controllers/productController/addProductController');
const getProductController = require('../../controllers/productController/getProductController');
const getProductsByCategoryId = require('../../controllers/productController/getProductsByCategoryId');
const getProductsByProductsId = require('../../controllers/productController/getProductsByProductsId');
const updateProductsController = require('../../controllers/productController/updateProductsController');


// add product controller 
routes.post('/addProduct',addProductController);

// get products 
routes.get('/getProduct',getProductController);

// get products by products  category id 
routes.get('/getProductsByCategoryId/:productsCategoryId',getProductsByCategoryId)
// get products by product id 
routes.get('/getProductsByProductId/:productId',getProductsByProductsId)

// update product
routes.patch('/updateProduct',updateProductsController)




module.exports=routes