// importing data base
const connectDB = require('../../connectDB');


async function addCategoryController(req, res) {
    try {

        const categoryData = req.body;
        /**
         * this req.body contains only one field
         *  1. category : string --> type 
         */



        // checking if caṭegory is already added or not 

        const checkingCategoryIsAlreadyExits = "select name from category where name=?"

        connectDB.query(checkingCategoryIsAlreadyExits, [categoryData.category], (checkingCategoryIsAlreadyExitsError, checkingCategoryIsAlreadyExitsResults) => {

            // this means no category is added before 
            if (checkingCategoryIsAlreadyExitsResults.length <= 0) {

                // adding category 


                const addCtegoryQuery = "insert into category  (name) value(?)"


                connectDB.query(addCtegoryQuery, [categoryData.category], (addCtegoryQueryError, addCtegoryQueryResult) => {

                    if (!addCtegoryQueryError) {


                        return res.status(201).json({
                            message: "category added successfully ",
                            success: true,
                            error: false
                        })

                    }
                    else {
                        return res.status(400).json({
                            message: "there is error in addCtegoryQuery ",
                            success: false,
                            error: true,
                            errorData: addCtegoryQueryError

                        })

                    }

                })




            }

            else {
                return res.status(400).json({
                    message: "category already added ",
                    success:false,
                    error:true,
                    errorData:checkingCategoryIsAlreadyExitsResults
                })
            }


        })








    } catch (error) {



        return res.status(400).json({
            message: "there is error in  add category controller  ",
            success: false,
            error: true,
            errorData: error
        })

    }

}

module.exports = addCategoryController;