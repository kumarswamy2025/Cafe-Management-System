# <div style="animation: fadeIn 2s;">Cafe Management System - Backend</div>

The Café Management System is a full-stack web application designed to streamline the management of a café's day-to-day operations. The system integrates various features to handle billing, product management, user roles, and categories efficiently.

## Technologies Used

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/Nodemailer-0078D4?style=for-the-badge&logo=microsoftoutlook&logoColor=white" />
  <img src="https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=twilio&logoColor=white" />
</p>


## **Project Features and Components**

### **Controllers**
- **BillController**: Manages billing operations, including generating, retrieving, and updating customer bills.
- **CategoryController**: Handles operations related to menu categories, such as adding, updating, and deleting categories.
- **DashboardController**: Provides an overview of café operations, including key performance indicators and summary reports.
- **ProductController**: Manages product-related functionalities like adding new items, updating inventory, and deleting products.
- **UserController**: Handles user authentication, role management, and CRUD operations for user accounts.

### **Routes**
- **BillRoute**: Defines API endpoints for billing operations.
- **CategoryRoute**: Specifies routes for managing menu categories.
- **DashboardRoute**: Configures endpoints to fetch and display dashboard data.
- **ProductRoute**: Maps routes for product-related actions.
- **UserRoute**: Contains endpoints for user authentication and account management.

### **Authentication and Security**
- JWT (JSON Web Token) is used to implement secure authentication mechanisms. Each user is issued a token for session validation, ensuring data security and authorized access to various features.

### **Database**
- **Database Name**: `cafe_management_db`
- **Tables**:
  - **User**: Stores user details like username, password (hashed), and roles.
  - **Category**: Maintains a list of menu categories.
  - **Product**: Tracks product information, including prices and inventory levels.
  - **Bill**: Records billing details, such as customer transactions and total amounts.
- **Database System**: MySQL



---
## **Additional Features**
- **Role-Based Access Control**: Provides differentiated access levels for admins, staff, and customers.
- **Dynamic Dashboard**: Offers real-time analytics on sales, products, and customer activity.
- **Inventory Management**: Tracks stock levels and notifies when supplies are running low.

---

This system ensures a smooth café management experience by combining robust backend logic, secure user authentication, and an organized database structure. It is scalable, secure, and designed to enhance operational efficiency for café businesses.

---


## Folder Structure

```bash
backend/
│
├── src/
│   ├── controllers/          # API route handlers   
│        ├── BillController/    #BIll controller
│        ├── categoryController/ #Category controller
│        ├── dashboardController/ #Dashboard controller
│        ├── productController/  #Product controller
│        ├── userController/    #User controller
│   ├── routes/                # API routes for each endpoint
│       ├── BillRoute/    #BIll Route
│       ├── categoryRoute/ #Category Route
│       ├── dashboardRoute/ #Dashboard Route
│       ├── productRoute/  #Product Route
│       ├── userRoute/    #User Route
│  ├── services/                  # This folder contains service files
│    ├── AuthenticateToken/           # JWT authentication middleware
│    ├── checkRole/                #  This file contains user roles
│  └── server.js             # Main server file
├── config/                   # Configuration files (e.g., database, email credentials)
└── package.json              # Project dependencies and scripts
```

## Setup Instructions


1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and set up the environment variables (see `.env` example below).
   ```plaintext
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
   ```
4. Run the backend server: 
   ```bash
   npm start
   ```







## Database SQL Tables

### User Table

```sql
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
```

### Category Table

```sql
CREATE TABLE category(
    id int not NULL AUTO_INCREMENT,
    name varchar(250) not NULL,
    primary key(id)
);
```

### Product Table

```sql
CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    categoryId INT,
    description VARCHAR(255),
    price INT,
    status VARCHAR(255)
);
```

### Bill Table

```sql
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
```


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
