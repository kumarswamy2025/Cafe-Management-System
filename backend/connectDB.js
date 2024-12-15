// importing mysql module
const mysql=require('mysql');
// configuring dotenv file here because here we using
require('dotenv').config();

// creating mysql connection
var connection=mysql.createConnection({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_pASSWORD,
    database:process.env.DB_NAME,

    
    
})
// connecting mysql connection 
connection.connect((error)=>{
    if(!error){
        console.log("connected sucess fully...");
        
    }
    else{
        console.log(error);
        
    }
})

// exporting mysql connection

module.exports=connection