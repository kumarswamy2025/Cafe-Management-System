// importing data base
const connectDB = require('../../connectDB');
async function getProductsByProductsId(req,res) {

    try {
        const productId=req.params.productId;

        const getProductByProductIdQuery=" select id ,name , description,price from product where id =? "

        connectDB.query(getProductByProductIdQuery,[productId],(getProductByProductIdQueryError,getProductByProductIdQueryResult)=>{

            if(!getProductByProductIdQueryError){
                return res.status(200).json({
                    message:"the data is sended successfully ",
                    success:true,
                    error:false,
                    successData:getProductByProductIdQueryResult
        
                })

            }
            else{
                return res.status(400).json({
                    message:"ther is an erroor in  the getProductByProductIdQuery ",
                    success:false,
                    error:true,
                    errorData:getProductByProductIdQueryError
        
                })

            }

        })

        
    } catch (error) {

        return res.status(400).json({
            message:"ther is an erroor in  the getProductsByProductsId ",
            success:false,
            error:true,
            errorData:error

        })
        
    }
    
}

module.exports=getProductsByProductsId