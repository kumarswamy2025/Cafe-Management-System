const express=require('express')
const countCategory_Product_BillController = require('../../controllers/dashboardController/countCategory_Product_billController')
const authenticateToken = require('../../services/authenticateToken');

const route=express.Router()

route.get('/dashboardDetails',authenticateToken,countCategory_Product_BillController)

module.exports=route