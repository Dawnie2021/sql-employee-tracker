const mysql = require('mysql2');
const inquirer = require('inquirer');
// require('console.table');


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

prompt(
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'view',
        choices: [
            'All departments',
            'All roles',
            'All employees',
            // 'Add a department',
            // 'Add a role',
            // 'Add an employee',
            // 'Update an employee role',
            'Exit']
    }).then((answer) => {
       
            if (answer.view === 'All departments')
        db.query('SELECT * FROM department', (error, departments) => {
            if (error) console.error(error);
            console.log(departments)
        });
        if (answer.view === 'All roles')
        db.query('SELECT * FROM role', (error, roles) => {
            if (error) console.error(error);
            console.log(roles)
        });
        if (answer.view === 'All employees')
        db.query('SELECT * FROM employee', (error, employees) => {
            if (error) console.error(error);
            console.log(employees)
        });
        
        
    })
        
        
        

        
        
       
      
  
  