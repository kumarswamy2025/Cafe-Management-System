// importing data base
const connectDB = require('../../connectDB');

async function GettingAllAdminUserController(req,res) {

    try {
        const getAllAdminUserQuery="select name,email,status,role from user where role='admin'"
        connectDB.query(getAllAdminUserQuery,(getAllAdminUserQueryError,getAllAdminUserQueryResult)=>{


            if(!getAllAdminUserQueryError){
                return res.status(200).json({
                    message:"all admin details are sended sucessfully......",
                    data:getAllAdminUserQueryResult,
                    success:true,
                    error:false
                })
            }
            else{
                return res.status(404).json({
                    message:"there is an error in getting all admin user controller query",
                    dataError:getAllAdminUserQueryError,
                    success:false,
                    error:true
                })
            }

        })
        
    } catch (error) {

         return res.status(404).json({
                    message:"there is an error in getting all admin user controller ",
                    dataError:getAllAdminUserQueryError,
                    success:false,
                    error:true
                })
    }
    
}

module.exports=GettingAllAdminUserController