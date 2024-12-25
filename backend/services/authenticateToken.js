const jwt = require('jsonwebtoken');
require('dotenv').config();
// this fucntion is used to authorize the application

async function authenticateToken(req, res, next) {

    try {
        //  here we using Bearer Tokens to evalute the user is exits or not 
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        // console.log("token data:", token);

        if (token == null) {
            return res.status(400).json({
                message: "please login... ",
                success: false,
                error: true
            })
        }
        else {

            //   verifying jwt token
            jwt.verify(token, process.env.ACCESS_TOKEN, (errorTokenVerify, resultTokenVerify) => {
                if (errorTokenVerify) {
                    res.status(404).json({
                        message: "there  is an error in  token verification......",
                        success: false,
                        error: true
                    })

                }
                else {
                    // this will store in user local system
                    res.locals = resultTokenVerify;

                    

                    // console.log("res locals",res.locals);
                    
                    next()
                    //  res.status(201).json({
                    //     message: "user login successfully",
                    //     success: true,
                    //     error: false
                    // })


                }

            })



        }










    } catch (error) {
        return res.status(400).json({
            message: "there is an error  in auth tokens  please check once  ",
            success: true,
            error: error
        })

    }
}
module.exports = authenticateToken