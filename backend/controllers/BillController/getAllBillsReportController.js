// importing data base
const connectDB = require('../../connectDB');
async function getAllBillsController(req, res) {

    try {
        const getAllBillsQuery = "select * from bill order by id desc";
        connectDB.query(getAllBillsQuery, (getAllBillsQueryError, getAllBillsQueryResult) => {

            if (!getAllBillsQueryError) {
                return res.status(200).json({
                    message: "the data sended successfully..",
                    success: true,
                    successData: getAllBillsQueryResult,
                    error: false
                })

            }
            else {
                return res.status(400).json({
                    message: "there is an error in the getAllBillsQuery please check once ",
                    success: false,
                    errorData: getAllBillsQueryError,
                    error: true
                })


            }

        })

    } catch (error) {
        return res.status(400).json({
            message: "there is an error in the getAllBillsController please check once ",
            success: false,
            errorData: error,
            error: true
        })

    }

}
module.exports=getAllBillsController