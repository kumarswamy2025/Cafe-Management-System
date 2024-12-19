// importing nodemailer module
const nodemailer = require('nodemailer')
/**
 * =====================  how to  use  of nodemailer =======================================
 * Nodemailer is a popular Node.js module used to send emails programmatically. 
 * It supports various email services and protocols like SMTP, OAuth2, and direct transport.
 * Developers commonly use it for tasks like sending confirmation emails, password reset links, or notifications in web applications.
 * 
 * Key Features:
 *  1. Supports SMTP for sending emails.
 *  2. Compatible with OAuth2 for secure email sending.
 *  3. Provides support for various email templates.
 *  4.  Allows attachments in emails.  
 *  5. Works with popular email services like Gmail, Yahoo, Outlook, etc.
 * 
 * Installation:  npm install nodemailer
 * 
 * Usage Example:
 *  Here’s a basic example of how to use Nodemailer:
 *  1. Import Nodemailer : const nodemailer = require('nodemailer');
 *  2. Set up Transporter : Create a transporter object using SMTP or a specific email service:
 *    code : 
           const transporter = nodemailer.createTransport({
           service: 'gmail', // You can use other services like 'yahoo', 'outlook', etc.
           auth: {
           user: 'your-email@gmail.com', // Your email
           pass: 'your-email-password'  // Your email password (or app-specific password)
                }
         });
           
 *   3. Compose the Email:  Define the email's content:
 *      code : 
                const mailOptions = {
                        from: 'your-email@gmail.com',       // Sender address
                        to: 'recipient-email@gmail.com',    // List of recipients
                        subject: 'Hello from Nodemailer',   // Subject line
                        text: 'This is a plain text message.', // Plain text body
                         html: '<b>This is an HTML message.</b>' // HTML body
                      };

                       
 *  4. Send the Email: Send the email using the sendMail method:
 *       code : 
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                   console.log('Error:', error);
                    } else {
                   console.log('Email sent:', info.response);
                     }
                });

 * Handling Common Issues:
 *   1. Authentication Issues:
 *       (a). For Gmail, enable "Less secure app access" or use an app-specific password.
 *       (b). Ensure two-factor authentication (2FA) is considered when setting credentials.
 *  2. Rate Limits:
 *      (a).Avoid sending too many emails in a short time to prevent being flagged as spam.
 *      (b).
 *  3. Environment Variables:
 *    (a).Store sensitive information like email and password in environment variables using .env files.
 *    
 * 
 */


// configuring dot env file here
require('dotenv').config()

// importing data base
const connectDB = require('../../connectDB');
//importing   crypto module to generate random string
const crypto = require('crypto');




async function passwordResetController(req, res) {
    try {
        // getting data from req
        const userData = req.body;



        //    query for  fetching user details(email, password) from DB 
        const findUserExitQuery = "select email,password from user where email=?";

        connectDB.query(findUserExitQuery, [userData.email], (queryError, QueryResult) => {
            // cheching user is exits or not 
            if (QueryResult.length <= 0) {

                return res.status(404).json({
                    message: "user not exits on this email address please register now  ",
                    success: false,
                    error: true
                })
            }

            else if (QueryResult[0].email == userData.email) {

                // reset password length
                const resetPasswordLength = 10;

                // setting  random password with 10  with combination of characters and numbers  and   and updating in db
                const randomPassword = crypto
                    .randomBytes(Math.ceil(resetPasswordLength / 2)) // Generate sufficient random bytes
                    .toString('hex') // Convert to hexadecimal string
                    .slice(0, resetPasswordLength); // Trim to the desired length

                //    query for password reset quey 
                const passwordResetQuery = "update user set password=? where email=?"

                connectDB.query(passwordResetQuery, [randomPassword, QueryResult[0].email], (passwordResetQueryError, passwordResetQueryResult) => {

                    if (!passwordResetQueryError) {
                        // console.log("passowrd reset result:"+JSON.stringify(passwordResetQueryResult));
                        

                    }
                    else {
                        console.log("password reset error : " + passwordResetQueryError);
                        return res.status(500).json({
                            message: "password reset error ",
                            success: false,
                            error: true
                        })

                    }

                })



                // this is transpoter method 
                const transpoter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PASSWORD
                    }

                })







                const mailOptions = {
                    from: process.env.EMAIL, // Sender's email from environment variables
                    to: QueryResult[0].email, // Recipient's email from the database query
                    subject: "Password Reset Link for Cafe Management System", // Subject line
                    html: `
                        <h1>Password Reset Link Details</h1>
                        <p><strong>Email:</strong> ${QueryResult[0].email}</p>
                        <p><strong>Password:</strong> ${randomPassword}</p>
                        <a href="${process.env.FRONTEND_URL}" target="_blank">Click here to login</a>
                    ` // Properly formatted HTML with template literals
                };


                transpoter.sendMail(mailOptions,(sendMailError,sendMailResult)=>{

                    if(sendMailError){
                        console.log("there is error in sendMail method:", sendMailError);

                        return res.status(500).json({
                            message: "there is error in sendMail method",
                            success: false,
                            error: true
                        }) 
                        
                    }
                    else{
                        // console.log("the mail is sended successfully.... ");
                        // console.log("email response : ", sendMailResult);
                        return res.status(201).json({
                            message: "the mail is sended successfully.... ",
                            success: true,
                            error: false,
                            data:sendMailResult
                        })
                        
                        
                    }

                })









            }
            else {
                return res.status(500).json({
                    message: "Something went wrong please try again later  ",
                    success: false,
                    error: true
                })
            }



        })




    } catch (error) {

        return res.status(500).json({
            message: "there is an error in password reset controller please check ",
            success: false,
            error: false

        })

    }

}

module.exports = passwordResetController;