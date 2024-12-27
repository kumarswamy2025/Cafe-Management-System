// importing data base
const connectDB = require('../../connectDB');
async function updateProductsController(req,res) {

    try {

        const productData=req.body;
        /**
         *  this body contains  5 fields
         *  1. name 
         *  2. categoryId
         *  3. description
         *  4. price
         *  5. id 
         * 
         * 
         */

        const updateProductQuery="update product set  name=?, categoryId=?, description=? , price=? where id=? "
        connectDB.query(updateProductQuery,[productData.name,productData.categoryId,productData.description,productData.price,productData.id],(updateProductQueryError,updateProductQueryResult)=>{


            if(!updateProductQueryError){

                if(updateProductQueryResult.affectedRows==0){

                    return res.status(400).json({
                        message:"unable to find the product id ",
                        success:false,
                        error:true
                    })

                }
                else{

                    return res.status(200).json({
                        message:"successfully updated...",
                        success:true,
                        error:false
                    })

                }

            }
            else{
                return res.status(400).json({
                    message:"ther is an erroor in  the updateProductQueryError ",
                    success:false,
                    error:true,
                    errorData:error
        
                })



            }

        })

        
    } catch (error) {

        return res.status(400).json({
            message:"ther is an erroor in  the updateProductsController ",
            success:false,
            error:true,
            errorData:error

        })
        
    }
    
}

module.exports=updateProductsController