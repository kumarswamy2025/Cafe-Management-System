// importing express module 
const express=require('express')
const addCategoryController = require('../../controllers/categoryControllers/addCategoryController')
// importing router method avalable in express module 
const routes=express.Router()

const authenticateToken = require('../../services/authenticateToken');


// add category route 
routes.post('/addCategory',authenticateToken,addCategoryController)



module.exports=routes