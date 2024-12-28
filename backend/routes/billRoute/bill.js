const express=require('express')
const route=express.Router();
const authenticateToken = require('../../services/authenticateToken');
const generateBillController = require('../../controllers/BillController/generateBillController');
const getPdfController = require('../../controllers/BillController/getPdfController');










// generate bill route 
route.post('/generateBillPDF',authenticateToken,generateBillController)

// get bill route 
route.post('/getPdf',authenticateToken,getPdfController)


















module.exports=route
