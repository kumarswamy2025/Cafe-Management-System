// importing data base
const connectDB = require('../../connectDB');
async function GettingAllUserController(req,res) {
    try {
        const getAllUserQuery="select id, name,email,status,role,contactnumber from user where role='user' or role='admin'"

        

     
       
        
        connectDB.query(getAllUserQuery,(getAllUserQueryError,getAllUserQueryResult)=>{


            if(!getAllUserQueryError){
                return res.status(200).json({
                    message:"all users details are sended sucessfully......",
                    data:getAllUserQueryResult,
                    success:true,
                    error:false
                })
            }
            else{
                return res.status(404).json({
                    message:"there is an error in getting all  user controller query",
                    dataError:getAllUserQueryError,
                    success:false,
                    error:true
                })
            }

        })
        
    } catch (error) {

         return res.status(404).json({
                    message:"there is an error in getting all  user controller ",
                    dataError:getAllUserQueryError,
                    success:false,
                    error:true
                })
    }
    
}

module.exports=GettingAllUserController