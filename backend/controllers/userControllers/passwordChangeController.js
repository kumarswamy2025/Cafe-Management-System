// importing data base
const connectDB=require('../../connectDB');


async function passwordChangeController(req,res) {

    try {
        //   assigning the data comming from frontend in userData variable
        /**
         *  req.body contains three fields 
         *  1. old_password
         *  2. new_Password
         *  3. conform_password
         */
        const userData=req.body;
        // console.log("userdata",userData);
        
        // taking email id from res.locals (it is created and stores in local system when user logins  )
        const UserEmail=res.locals.email;

        const gettingEmailAndPasswordQuery="select * from user where email=? and password=?";
        connectDB.query(gettingEmailAndPasswordQuery,[UserEmail,userData.old_password],(checkingOldPasswordError,checkingOldPasswordResult)=>{

            if(!checkingOldPasswordError){
                // checking if old password is correct or not 
                if(checkingOldPasswordResult.length<=0){
                    return res.status(400).json({
                        message:"incorrect old password",
                        success:false,
                        error:true
                    })
                }


                // execute this if old password is correct
                else if(checkingOldPasswordResult[0].password == userData.old_password){

                    // checking if new password and conform passwords are same 

                    if(userData.new_Password==userData.conform_password){
                        // if both old password and new password are same then execute below code 
                        const updatePasswordQuery="update user set password=? where email=?"
                        // executing change password query
                        connectDB.query(updatePasswordQuery,[userData.new_Password,UserEmail],(updatePasswordQueryError,updatePasswordQueryResult)=>{

                            if(!updatePasswordQueryError){


                                return res.status(201).json({
                                    message:"password changed successfully",
                                    success:true,
                                    error:false

                                })

                            }
                            else{
                                return res.status(401).json({
                                    message:"password not  changed try again later ",
                                    success:false,
                                    error:true
                                    
                                })

                            }



                        })




                    }

                    else{
                        return res.status(400).json({
                            message:"new password and  conform password are not same please check once",
                            success:false,
                            error:true
                        })
                        
                    }


 

                }

                // default case 

                else{
                    return res.status(400).json({
                        message:"Something Went Wrogn please try again later...",
                        success:false,
                        error:true
                    })

                }



            }
            else{
                return res.status(400).json({
                    message:"there is error in the getting user email and password query  from db",
                    success:false,
                    error:true
                    
                })

            }




        })

        
        
        
    } catch (error) {
        return res.status(400).json({
            message:"there is error in the password change controller ",
            success:false,
            error:true,
            ErrorMessage:error
        })
        
    }
    
}

module.exports=passwordChangeController