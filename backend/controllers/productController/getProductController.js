// importing data base
const connectDB = require('../../connectDB');
async function getProductController(req,res) {

    try {
     
        
            // inner join the product table and category table 
            // this query is used to get products by category wise by comparing  p.categoryId with c.id
            // p is products
            //c is category 
        const getProductsQuery="select p.id,p.name, p.description, p.price , c.id as categoryId , c.name as categoryName from product as p inner join category as c  where p.categoryId=c.id";

        connectDB.query(getProductsQuery,(getProductsQueryError,getProductsQueryResult)=>{
            if(!getProductsQueryError){
                return res.status(200).json({
                    message:"sucessfully fetched the products ",
                    success:true,
                    error:false,
                    successData:getProductsQueryResult

                })

            }
            else{
                return res.status(400).json({
                    message:"ther is an erroor in  the getProductsQuery  ",
                    success:false,
                    error:true,
                    errorData:getProductsQueryError

                })

            }
        })
        
    } catch (error) {

        return res.status(400).json({
            message:"ther is an erroor in  the getProductController ",
            success:false,
            error:true

        })
        
    }
    
}

module.exports=getProductController