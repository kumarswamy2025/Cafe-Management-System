// importing data base
const connectDB = require('../../connectDB');

async function updateProductStatusController(req,res) {

    try {

        const productData =req.body;
        /**
         *  In this body contaions 2 fields
         *  1. status
         *  2. id 
         */

        const updateProductStatusQuery="update product set status=? where id=?";
        connectDB.query(updateProductStatusQuery,[productData.status,productData.id],(updateProductStatusQueryError,updateProductStatusQueryResult)=>{

            if(!updateProductStatusQueryError){

                if(updateProductStatusQueryResult.affectedRows==0){
                    return res.status(400).json({
                        message:"product is not find ",
                        success:false,
                        error:true
                    })
                }
                else{
                    return res.status(201).json({
                        message:"product status updated successfully",
                        success:true,
                        error:false
                    })
                }


            }
            else{

                return res.status(400).json({
                    message:"there is an error in the updateProductStatusQuery",
                    success:false,
                    error:true,
                    errorData:updateProductStatusQueryError
                })



                

            }

        })


        
    } catch (error) {
        return res.status(400).json({
            message:"there is an error in the updateProductStatusController",
            success:false,
            error:true,
            errorData:error
        })
        
    }
    
}

module.exports=updateProductStatusController