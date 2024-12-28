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
const deleteProductController = require('../../controllers/productController/deleteProductController');
const updateProductStatusController = require('../../controllers/productController/updateProductStatusController');


// add product controller 
routes.post('/addProduct',authenticateToken,addProductController);

// get products 
routes.get('/getProduct',authenticateToken,getProductController);

// get products by products  category id 
routes.get('/getProductsByCategoryId/:productsCategoryId',authenticateToken,getProductsByCategoryId)
// get products by product id 
routes.get('/getProductsByProductId/:productId',authenticateToken,getProductsByProductsId)

// update product
routes.patch('/updateProduct',authenticateToken,updateProductsController)

// delete product by id 
routes.delete('/deleteProduct/:productId',authenticateToken, deleteProductController)

// update product status
routes.patch('/updateStatus',authenticateToken,updateProductStatusController)

module.exports=routes