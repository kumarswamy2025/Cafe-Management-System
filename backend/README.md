
---

### 2. **Backend README.md**

```markdown
# Cafe Management System - Backend

This is the backend of the Cafe Management System, built with Node.js and Express.js. It provides the necessary API endpoints for managing the cafe's operations.

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MySQL**: Database for storing user data, product info, and bills
- **JWT Tokens**: For user authentication and secure communication
- **Nodemailer**: For sending emails (e.g., password reset)
- **Twilio**: For sending SMS (used for password reset)
- **EJS**: For rendering dynamic HTML templates
- **html-pdf**: For generating PDF files from HTML content
- **uuid**: To generate unique identifiers for records

## Folder Structure

```bash
backend/
│
├── src/
│   ├── controllers/          # API route handlers
│   ├── models/               # MySQL models (User, Product, Bill, etc.)
│   ├── routes/               # API routes for each endpoint
│   ├── middleware/           # JWT authentication middleware
│   ├── utils/                # Utility functions (e.g., PDF generation)
│   └── server.js             # Main server file
├── config/                   # Configuration files (e.g., database, email credentials)
└── package.json              # Project dependencies and scripts


Setup Instructions
  1. Clone the repository:
     git clone <repo_url>
  2. Navigate to the backend folder:
     cd backend
  3.Install dependencies:
     npm install
  4. Create a .env file and set up the environment variables (see .env example below).
  5. Run the backend server: 
    npm start

.env Configuration
       
# frontend URL
FRONTEND_URL="http://localhost:4200/"

# Server port
PORT=8080

# MySQL Database Connection
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=<your_db_username>
DB_PASSWORD=<your_db_password>
DB_NAME=cafe_management_db

# JWT Secret Key
ACCESS_TOKEN=<your_access_token_secret>

# Nodemailer credentials
EMAIL=<your_email>
PASSWORD=<your_email_password>

# Twilio Credentials
TWILIO_ACCOUNT_SID=<your_twilio_account_sid>
TWILIO_AUTH_TOKEN=<your_twilio_auth_token>
TWILIO_PHONE_NUMBER=<your_twilio_phone_number>


Features:
 1. User Authentication with JWT Tokens
 2. Order and Bill Management
 3. Product and Category Management
 4. Email Notifications (Nodemailer)
 5. SMS Notifications (Twilio)
 6. PDF Bill Generation (html-pdf)

License
This project is licensed under the MIT License - see the LICENSE file for details.

==============data base sql table===============

-- creating user table 

CREATE TABLE user(
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    contactnumber varchar(20),
    email varchar(50),
    password varchar(250),
    status varchar(20),
    role varchar(20),
    UNIQUE (email)



);



-- creating category table

CREATE TABLE category(

    id int not NULL AUTO_INCREMENT,
    name varchar(250) not NULL,
    primary key(id)
    
    )


Product Table:
CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    categoryId INT,
    description VARCHAR(255),
    price INT,
    status VARCHAR(255)
);
Bill Table:
CREATE TABLE bill (
    id INT PRIMARY KEY AUTO_INCREMENT,
    uuid VARCHAR(200),
    name VARCHAR(250),
    email VARCHAR(250),
    contactnumber VARCHAR(50),
    paymentMethod VARCHAR(50),
    total INT,
    productDetails JSON DEFAULT NULL,
    createdBy VARCHAR(255)
);






 

