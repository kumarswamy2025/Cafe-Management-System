// importing data base
const connectDB = require('../../connectDB');
async function countCategory_Product_BillController(req,res) {

    try {


        let categoryCount;
        let productCount;
        let billCount;

        const categoryCountQuery="select count(id) as categoryCount from category "

        connectDB.query(categoryCountQuery,(categoryCountQueryError,categoryCountQueryResult)=>{

            if(!categoryCountQueryError){
                categoryCount=categoryCountQueryResult[0].categoryCount

            }
            else{

                return res.status(400).json({
                    message:"there is an error in categoryCountQuery please check once ",
                    error:true,
                    success:false,
                    errorData:categoryCountQueryError
                })

            }

        })


        const productCountQuery="select count(id) as productCount from product"
        connectDB.query(productCountQuery,(productCountQueryError,productCountQueryResult)=>{

            if(!productCountQueryError){

                productCount=productCountQueryResult[0].productCount

            }
            else{

                return res.status(400).json({
                    message:"there is an error in productCountQuery please check once ",
                    error:true,
                    success:false,
                    errorData:productCountQueryError
                })

            }

        })

         const billCountQuery="select count(id) as billCount from bill"
         connectDB.query(billCountQuery,(billCountQueryError,billCountQueryResult)=>{

            if(!billCountQueryError){

                billCount=billCountQueryResult[0].billCount
                return res.status(200).json({
                    message:"the sended successfully",
                    success:true,
                    error:false,
                    data:{
                        categoryCount,
                        
                        productCount,
                        billCount
                        

                    }
                })

            }
            else{
                return res.status(400).json({
                    message:"there is an error in billCountQuery please check once ",
                    error:true,
                    success:false,
                    errorData:billCountQueryError
                })

            }

         })

        
    } catch (error) {
        return res.status(400).json({
            message:"there is an error in countCategory_Product_BillController  please check once ",
            error:true,
            success:false,
            errorData:error
        })
        
    }
    
}

module.exports=countCategory_Product_BillController