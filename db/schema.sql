DROP DATABASE IF EXISTS staff_db;
-- created a staff_db database
CREATE DATABASE staff_db;

USE staff_db; 
-- created a department table
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);
-- created a role table
CREATE TABLE `role` (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY(department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);
-- created an employee table
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    manager_id INT,
    role_id INT,
    FOREIGN KEY(role_id)
    REFERENCES `role`(id),
    FOREIGN KEY(manager_id)
    REFERENCES employee(id)
);