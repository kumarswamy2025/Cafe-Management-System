// importing data base
const connectDB = require('../../connectDB');
async function deleteProductController(req,res) {
    try {

        const productId=req.params.productId;
        const deleteProductQuery="delete from product where id=? "

        connectDB.query(deleteProductQuery,[productId],(deleteProductQueryError,deleteProductQueryResult)=>{

            if(!deleteProductQueryError){

                if(deleteProductQueryResult.affectedRows==0){
                    return res.status(400).json({
                        message:"product is not available ",
                        success:false,
                        error:true
                    })
                }
                 else{
                    return res.status(201).json({
                        message:"product deleted successfully  ",
                        success:true,
                        error:false
                    })

                }

            }
            else{

                return res.status(400).json({
                    message:"there is an error in the deleteProductQuery",
                    success:false,
                    error:true,
                    errorData:deleteProductQueryError
                })

                

            }

        })
        
    } catch (error) {

        return res.status(400).json({
            message:"there is an error in the deleteProductController",
            success:false,
            error:true,
            errorData:error
        })


        
    }
    
}

module.exports=deleteProductController