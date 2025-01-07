// importing data base
const connectDB = require('../../connectDB');
async function addProductController(req,res) {

    try {
        const productData=req.body;
        const {name} =req.body
        /**
         * 
         * this body contains 4 fields 
         *  1. name
         *  2. categoryId
         *  3. description
         *  4. price
         * 
         *  
         */

        if (!productData.name) {
            throw new Error("please provide name ");
        }
        if (!productData.description) {
            throw new Error("please provide  description");
        }
        if (!productData.price) {
            throw new Error("please provide price ");
        }
        

       
        const addProductQuery="insert into product  (name,categoryId,description,price,status)  values(?,?,?,?,'false')"
        connectDB.query(addProductQuery,[productData.name,productData.categoryId,productData.description,productData.price],(addProductQueryError,addProductQueryResult)=>{

            if(!addProductQueryError){

                return res.status(200).json({
                    message:"Product is added successfully ",
                    success:true,
                    error:false,
                    successData:addProductQueryResult
                })

            }
            else{
                return res.status(400).json({
                    message:"there is an error in the add Product Query please check once  ",
                    success:false,
                    error:true,
                    errorData:addProductQueryError
                })
            }



        })
        
    } catch (error) {

        return res.status(400).json({
            message:error.message,
            success:false,
            error:true,
            errorData:"there is an error in the addProductController please check once  "
        })
        
    }
    
}

module.exports=addProductController