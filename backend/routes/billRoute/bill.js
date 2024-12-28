const express=require('express')
const route=express.Router();
const authenticateToken = require('../../services/authenticateToken');
const generateBillController = require('../../controllers/BillController/generateBillController');










// generate bill route 
route.post('/generateBillPDF',authenticateToken,generateBillController)


















module.exports=route
