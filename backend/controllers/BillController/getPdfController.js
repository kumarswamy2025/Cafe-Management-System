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

async function getPdfController(req, res) {

    try {
        const orderDetails = req.body;
        /**
         * in the req.body contains  7 fields
         * 1. uuid
         * 2. name
         * 3. email
         * 4. contactNumber
         * 5. paymentMethod
         * 6. total
         * 7. productDetails
         * 
         * 
         */
        const pdfPath = "./controllers/BillController/generated_PDF/" + orderDetails.uuid + ".pdf";
        if (fs.existsSync(pdfPath)) {
            res.contentType("application/pdf");
            fs.createReadStream(pdfPath).pipe(res);
        } else {
            let productDetailsReport = JSON.parse(orderDetails.productDetails);
            ejs.renderFile(
                path.join(__dirname, "", "billReports/billReports.ejs"),
                {
                    productDetails: productDetailsReport,
                    name: orderDetails.name,
                    email: orderDetails.email,
                    contactNumber: orderDetails.contactNumber,
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
                        pdf
                            .create(results)
                            .toFile(
                                "./controllers/BillController/generated_PDF/" + orderDetails.uuid + ".pdf",
                                (err, data) => {
                                    if (err) {
                                        console.log(err);
                                        return res.status(500).json({
                                            message: "there is an error  in the pdf creation  please check once ",
                                            success: false,
                                            error: true,
                                            errorData: err
                                        });
                                    } else {
                                        res.contentType("application/pdf");
                                        fs.createReadStream(pdfPath).pipe(res);
                                        // return res.status(200).json({
                                        //     message: "The bill  is successfully generated ",
                                        //     success: true,
                                        //     error: false,
                                        //     successData: data
                                        //     // uuid: generatedUUID
                                        // });
                                    }
                                }
                            );
                    }
                }
            );
        }


    } catch (error) {
        return res.status(400).json({
            message:"there is an error in getPdfController please check once ",
            success:false,
            error:true,
            errorData:error

        })
    }

}

module.exports = getPdfController