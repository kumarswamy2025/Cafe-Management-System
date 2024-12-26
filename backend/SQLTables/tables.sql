-- DB_NAME: cafe_management_db


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

-- inserting data into tables 


INSERT INTO user(name,contactnumber,email,password,status,role) values('Admin','123456789','admin@gmail.com','admin','true','admin');



-- creating category table

CREATE TABLE category(

    id int not NULL AUTO_INCREMENT,
    name varchar(250) not NULL,
    primary key(id)
    
    )

 