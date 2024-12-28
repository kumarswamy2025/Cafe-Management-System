const express=require('express')
const route=express.Router();
const authenticateToken = require('../../services/authenticateToken');
const generateBillController = require('../../controllers/BillController/generateBillController');
const getPdfController = require('../../controllers/BillController/getPdfController');
const getAllBillsController = require('../../controllers/BillController/getAllBillsReportController');
const deleteBillByIDController = require('../../controllers/BillController/deleteBillByIDController');
const viewBillByIdController = require('../../controllers/BillController/viewBillByIDController');

// generate bill route 
route.post('/generateBillPDF',authenticateToken,generateBillController)

// get bill route 
route.post('/getPdf',authenticateToken,getPdfController)

// get all bills
route.get('/getAllBills',authenticateToken,getAllBillsController)


// delete bill 
route.delete('/deleteBill/:id',authenticateToken,deleteBillByIDController)

// view bill by id
route.get('/viewBill/:id',viewBillByIdController)













module.exports=route
