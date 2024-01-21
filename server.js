const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');


// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'staff_db'
    },
    console.log('Connected to the staff_db database.')
);
// created a prompt 
const prompt = inquirer.createPromptModule();
// created a function to start the program
const init = () => {
    prompt(
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
                'Exit']
        }).then((answer) => {

            if (answer.view === 'View all departments')
                db.query('SELECT * FROM department', (error, departments) => {
                    if (error) console.error(error);
                    console.table(departments)
                    init();
                });
            if (answer.view === 'View all roles')
                db.query('SELECT * FROM role', (error, roles) => {
                    if (error) console.error(error);
                    console.table(roles)
                    init();
                });
            if (answer.view === 'View all employees')
                db.query('SELECT * FROM employee', (error, employees) => {
                    if (error) console.error(error);
                    console.table(employees)
                    init();
                });

                if (answer.view === 'Exit') {
                    process.exit();
                }
               



            // if (answer.view === 'Add a department') {
            //     inquirer.prompt({
            //         type: 'input',
            //         name: 'department',
            //         message: 'What is the name of the department?'
            //     })
            // }

            // if (answer.view === 'Add a role') {
            //     inquirer.prompt({
            //         type: 'input',
            //         name: 'role',
            //         message: 'What is the name of the role?',
                


            //         type: 'input',
            //         name: 'salary',
            //         message: 'What is the salary?',

                
            //     })

            // }

            // if (answer.view === 'Add an employee') {
            //     inquirer.prompt({
            //         type: 'input',
            //         name: 'employee',
            //         message: 'What is the name of the employee'
            //     })
            // }
                
            
            // process.exit();
        }
        )
};


init();



 


