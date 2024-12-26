// importing data base
const connectDB = require('../../connectDB');


// this function is used to update category
async function updateCategoryController(req,res) {

    try {


        const categoryData=req.body;
        /**
         * in the body there are 2 fields are comming 
         *  1.new_name
         *  2. id of category
         * 
         */

        const updateCategoryQuery="update category set name=? where id=?"

        connectDB.query(updateCategoryQuery,[categoryData.new_name,categoryData.id],(updateCategoryQueryError,updateCategoryQueryResult)=>{
            if(!updateCategoryQueryError){

                if(updateCategoryQueryResult.affectedRows==0){

                    return res.status(400).json({
                        message:" category id is not found please check once ",
                        success:false,
                        error:true,
                        errorData:updateCategoryQueryResult
                    })


                }
                else{

                    return res.status(201).json({
                        message:"category is updated successfully",
                        success:true,
                        error:false,
                        successData:updateCategoryQueryResult
                    })

                }
               

            }
            else{

                return res.status(400).json({
                    message:"there is an error in update Category Query ",
                    success:false,
                    error:true,
                    errorData:updateCategoryQueryError
                })

            }
        })


        
    } catch (error) {
        return res.status(400).json({
            message:"there is an error in update catgory controller ",
            success:false,
            error:true,
            errorData:error
        })
        
    }
    
}

module.exports=updateCategoryController