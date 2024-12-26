// importing data base
const connectDB = require('../../connectDB');

async function getAllCategoryController(req,res) {

    try {

        const getAllCategoryControllerQuery="select *  from  category  order by name "

         connectDB.query(getAllCategoryControllerQuery,(getAllCategoryControllerQueryError,getAllCategoryControllerQueryResult)=>{



            if(!getAllCategoryControllerQueryError){

                return res.status(200).json({
                    message:"all categories fetched success fully ",
                    success:true,
                    error:false,
                    SuccessData:getAllCategoryControllerQueryResult
                    
                })

            }
            else{
                return res.status(400).json({
                    message:"there is an error in getAllCategoryControllerQuery",
                    success:false,
                    error:true,
                    errorData:getAllCategoryControllerQueryError
                })

            }

        })


    } catch (error) {

        return res.status(400).json({
            message:"there is an error in get All Category Controller",
            success:false,
            error:true,
            errorData:getAllCategoryControllerQueryError
        })
        
    }
    
}

module.exports=getAllCategoryController;