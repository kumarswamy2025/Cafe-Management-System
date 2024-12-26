// importing express module 
const express=require('express')
const addCategoryController = require('../../controllers/categoryControllers/addCategoryController')
// importing router method avalable in express module 
const routes=express.Router()
// importing check role 
const checkRole= require('../../services/checkRole')


const authenticateToken = require('../../services/authenticateToken');
const getAllCategoryController = require('../../controllers/categoryControllers/getAllCategoryController');
const updateCategoryController = require('../../controllers/categoryControllers/updateCategoryController');


// add category route 
routes.post('/addCategory',authenticateToken,checkRole,addCategoryController)

// getting all categories 
routes.get('/getAllCategory',authenticateToken,getAllCategoryController)

// update category route 
routes.patch('/updateCategory',authenticateToken,updateCategoryController)

module.exports=routes