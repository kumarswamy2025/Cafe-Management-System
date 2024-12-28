// importing data base
const connectDB = require('../../connectDB');
// importing ejs
const ejs = require("ejs");
// importing html-pdj package
const pdf = require("html-pdf");
const path = require("path");
const fs = require("fs");
// used to generate uuid 
const uuid = require("uuid");



async function generateBillController(req, res) {

    try {

        const orderDetails = req.body;
        /**
          * this body contains 6 fields 
          * 1. name
          * 2. email
          * 3. contactNumber
          * 4. paymentMethod
          * 5. total
          * 6. productDetails
          * 
          * 
       */

        // insalizing uuid to generatedUUID variable 
        const generatedUUID = uuid.v1();
        // parsing json data comming from frontend 
        let productDetailsReport = JSON.parse(orderDetails.productDetails);
        // query to save order details in bill table 
        let saveOrderDetailsQuery = "insert into bill (name, uuid, email, contactnumber, paymentMethod, total, productDetails, createdBy) values(?,?,?,?,?,?,?,?)";
        connectDB.query(saveOrderDetailsQuery, [orderDetails.name,
            generatedUUID,
        orderDetails.email,
        orderDetails.contactnumber,
        orderDetails.paymentMethod,
        orderDetails.total,
        orderDetails.productDetails,
        res.locals.email,], (saveOrderDetailsQueryError, saveOrderDetailsQueryResuly) => {
            if (!saveOrderDetailsQueryError) {
                
                // this render the bill report ejs file 
                ejs.renderFile(
                    path.join(__dirname, "", "billReports/billReports.ejs"),
                    {
                        // variables used in ejs file sended as json format 
                        productDetails: productDetailsReport,
                        name: orderDetails.name,
                        email: orderDetails.email,
                        contactNumber: orderDetails.contactnumber,
                        paymentMethod: orderDetails.paymentMethod,
                        totalAmount: orderDetails.total,
                    },
                    (err, results) => {
                        if (err) {
                            return res.status(400).json({
                                message: "there is an error  in the ejs.render file method  please check once ",
                                success: false,
                                error: true,
                                errorData: err

                            });
                        } else {
                            // generate pdf with help of html-pdf package 
                            // console.log("this is results ",results);
                            
                            pdf
                                .create(results)
                                .toFile(
                                    "./controllers/BillController/generated_PDF/" + generatedUUID + ".pdf",
                                    (err, data) => {
                                        if (err) {
                                            // console.log(err);
                                            return res.status(500).json({
                                                message: "there is an error  in the pdf creation  please check once ",
                                                success: false,
                                                error: true,
                                                errorData: err
                                            });
                                        } else {
                                            return res.status(200).json({
                                                message: "The bill  is successfully generated ",
                                                success: true,
                                                error: false,
                                                successData: data,
                                                uuid: generatedUUID
                                            });
                                        }
                                    }
                                );
                        }
                    }
                );

            }
            else {

                return res.status(400).json({
                    message:"there is an error in saveOrderDetailsQuery please check once ",
                    success:false,
                    error:true,
                    errorData:saveOrderDetailsQueryError

                })

            }

        })






    } catch (error) {
        return res.status(400).json({
            message:"there is an error in generateBillController please check once ",
            success:false,
            error:true,
            errorData:error

        })

    }

}
module.exports = generateBillController