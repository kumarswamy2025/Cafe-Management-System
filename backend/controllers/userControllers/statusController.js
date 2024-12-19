// importing data base
const connectDB = require('../../connectDB');

// this contoller used to update the  status of users
async function statusController(req, res) {
    try {
        const userData = req.body;

        const updateStatusQuery = "update user set status=? where id=?"

        connectDB.query(updateStatusQuery, [userData.status, userData.id], (updateStatusQueryError, updateStatusQueryResult) => {


            if (!updateStatusQueryError) {
                // checking if status is updated or not
                if(updateStatusQueryResult.affectedRows==0){
                    return res.status(404).json({
                        message:"the status  is not updated please try  once ",
                        success:false,
                        error:true,

                    })

                }
                else{

                    return res.status(201).json({
                        message:"the user status updated successfully ",
                        success:true,
                        error:false,

                    })

                }




            }
            else {

                return res.status(404).json({
                    message: "there is an error in StatusController, the error is  status update query please check ",
                    success: false,
                    error: true,
                    errorData: updateStatusQueryError
                })

            }



        })



    } catch (error) {

        return res.status(404).json({
            message: "there is an error in StatusController please check ",
            success: false,
            error: true,
            errorData: error
        })

    }
}

module.exports = statusController;
