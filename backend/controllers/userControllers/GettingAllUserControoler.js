// importing data base
const connectDB = require('../../connectDB');
async function GettingAllUserController(req,res) {
    try {
        const getAllUserQuery="select name,email,status,role from user where role='user'"
        connectDB.query(getAllUserQuery,(getAllUserQueryError,getAllUserQueryResult)=>{


            if(!getAllUserQueryError){
                return res.status(200).json({
                    message:"all admin details are sended sucessfully......",
                    data:getAllUserQueryResult,
                    success:true,
                    error:false
                })
            }
            else{
                return res.status(404).json({
                    message:"there is an error in getting all admin user controller query",
                    dataError:getAllUserQueryError,
                    success:false,
                    error:true
                })
            }

        })
        
    } catch (error) {

         return res.status(404).json({
                    message:"there is an error in getting all admin user controller ",
                    dataError:getAllUserQueryError,
                    success:false,
                    error:true
                })
    }
    
}

module.exports=GettingAllUserController