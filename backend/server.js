// configuring dotenv here because  we using here 
require('dotenv').config();

// importing http module to create server
const http=require('http');

// importing backend application root  file 
const app=require('./index');

// creating server and passing the backend application root  file 
const server=http.createServer(app);


// starting server with help of listen() method 
server.listen(process.env.PORT,(error)=>{
    if(!error){
        console.log("SERVER IS SUCCESSFULLY STARTED...... AT PORT :",process.env.PORT);
        
    }
    else{
        console.log("SERVER  ERROR ",error);
        
    }
});