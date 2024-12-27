// importing data base
const connectDB = require('../../connectDB');
async function getProductsByCategoryId(req,res) {

    try {
        // note :  categoryId is avalable in product table 
        const productsCategoryId=req.params.productsCategoryId;

        const getProductsByCategoryIdQuery="select id ,name from product where categoryId=? and status='true'"

        connectDB.query(getProductsByCategoryIdQuery,[productsCategoryId],(getProductsByCategoryIdQueryError,getProductsByCategoryIdQueryResult)=>{


            if(!getProductsByCategoryIdQueryError){
                return res.status(200).json({
                    message:"data is successfully sended by the products  category id  ",
                    success:true,
                    error:false,
                    SuccessData:getProductsByCategoryIdQueryResult
        
                })



            }
            else{
                return res.status(400).json({
                    message:"ther is an erroor in  the getProductsByCategoryIdQuery ",
                    success:false,
                    error:true,
                    errorData:getProductsByCategoryIdQueryError
        
                })

            }

        })




    } catch (error) {
        return res.status(400).json({
            message:"ther is an erroor in  the getProductsByCategoryId ",
            success:false,
            error:true,
            errorData:error

        })
        
    }
    
}

module.exports=getProductsByCategoryId;