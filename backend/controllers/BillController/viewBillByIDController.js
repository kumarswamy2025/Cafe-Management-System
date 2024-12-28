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
async function viewBillByIdController(req, res) {
    try {
        const id = req.params.id;
        /**
         * this body contains only 1 field
         * 1. id 
         */

        // this query is used to find uuid by using id

        const findUuidQuery = "select * from bill where id=?";
        connectDB.query(findUuidQuery, [id], (findUuidQueryError, findUuidQueryResult) => {

            if (!findUuidQueryError) {

                if (findUuidQueryResult.length <= 0) {
                    return res.status(400).json({
                        message: "there is no bill by this id",
                        success: false,
                        error: true
                    })
                }
                else {

                    const orderDetails = findUuidQueryResult[0]

                    


                    // get bill pdf 
                    const pdfPath = "./controllers/BillController/generated_PDF/" + orderDetails.uuid + ".pdf";
                    if (fs.existsSync(pdfPath)) {
                        res.contentType("application/pdf");
                        fs.createReadStream(pdfPath).pipe(res);
                    } else {
                        // let productDetailsReport = JSON.parse(orderDetails.productDetails);
                        ejs.renderFile(
                            path.join(__dirname, "", "billReports/billReports.ejs"),
                            {
                                productDetails: orderDetails.productDetails,
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

                }

            }
            else {
                return res.status(400).json({
                    message: "there is an error in the findUuidQuery please check once",
                    success: false,
                    error: true,
                    errorData: findUuidQueryError
                })

            }

        })





    } catch (error) {
        return res.status(400).json({
            message: "there is an error in the viewBillByIdController please check once",
            success: false,
            error: true,
            errorData: error
        })


    }

}
module.exports = viewBillByIdController