const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');


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

const prompt = inquirer.createPromptModule();

prompt([
    {
        type: 'rawlist',
        message: 'What would you like to do?',
        name: 'view',
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