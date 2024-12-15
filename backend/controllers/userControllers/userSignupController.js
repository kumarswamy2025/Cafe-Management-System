
const connectDB=require('../../connectDB');

async function userSignupController(req,res){
    try {
        let userData=req.body;

        let checkingExitingUserQuery="select email,password,role,status,name,contactnumber from user where email=?"

        /**
         
         * email = ?: This condition filters the rows to return only those where the email column matches the value provided (represented by the ? placeholder).
         
         * The ? is a parameter placeholder commonly used in prepared statements to avoid SQL injection and dynamically insert values into queries.

         */

        /*
        
        * the connectDB.query() method is commonly used to interact with a database when using a MySQL client, like the mysql or mysql2 library. This method allows you to execute SQL queries and fetch results from the database.


        * General Syntax: connectDB.query(sqlQuery, [values], callback);
        * Parameters
          1. sqlQuery: The SQL query string to execute (e.g., SELECT, INSERT, UPDATE, etc.).

          2. values (optional): An array of values to safely parameterize the query. Prevents SQL injection.

          3. callback: A function executed once the query is completed. It has the following signature


         */


        //  executing query
        connectDB.query(checkingExitingUserQuery,[userData.email],(error,result)=>{

            if(!error){
                // checking if email is already exits 
                if(result.length<=0){


                    let createUserData="insert into user(name,contactnumber,email,password,role,status) value(?,?,?,?,'user','false') "
                    //   executing query 
                    connectDB.query(createUserData,[userData.name,userData.contactnumber,userData.email,userData.password],(createUserError,createUserResult)=>{

                        if(!createUserError){
                            // getting newly registered user details

                            let newlyRegisteredUser="select id, name,contactnumber,email,password,role,status from user where id=?"

                            connectDB.query(newlyRegisteredUser,[createUserResult.insertId],(newlyRegisteredUserError,newlyRegisteredUserResult)=>{

                                     

                                return res.status(201).json({
                                    message:"user Registered sucessfully",
                                    data:newlyRegisteredUserResult[0],
                                    success:true,
                                    error:false
                                })

                            })



                            



                        }

                        else{

                            res.status(200).json({
                                message:"There is error in user registration please check once",
                                success:false,
                                error:true

                            })

                        }


                    });


                }
                else{
                    return res.status(200).json({
                        message:"Email is already exits",
                        success:false,
                        error:true
                    })
                }
                
            }
            else{
                return res.status(400).json({
                    message:"error occurs",
                    error:error
                })
            }




        })







        
    } catch (error) {

        return res.status(400).json({
            message:"there is error in userSignUpController",
            success:false,
            error:true,

        })
        
    }
}

module.exports=userSignupController;