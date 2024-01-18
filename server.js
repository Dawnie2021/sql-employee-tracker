const mysql = require('mysql2');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();


// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employees_db'
    },
    console.log('Connected to the staff_db database.')
);



prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'choices',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    }]);