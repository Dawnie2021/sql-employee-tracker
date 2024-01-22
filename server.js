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




            if (answer.view === 'Add a department') {
                inquirer.prompt({
                    type: 'input',
                    name: 'department',
                    message: 'What is the name of the department?'
                })
                    .then(answer => {
                        const { department } = answer

                        db.promise().query('INSERT INTO department (name) VALUE(?) ', department)
                            .then(answer => console.log(answer))

                    })
            }

            if (answer.view === 'Add a role') {
                db.promise().query('SELECT department.id FROM department')
                    .then(([answer]) => {
                        const deptArr = answer.map(dept => dept.id)
                        inquirer.prompt([
                            {
                                type: 'input',
                                name: 'role',
                                message: 'What is the name of the role?',


                            },
                            {
                                type: 'input',
                                name: 'salary',
                                message: 'What is the salary?',

                            },

                            {

                                type: 'list',
                                name: 'department',
                                message: 'What is the department?',
                                choices: deptArr
                            }
                        ])
                        .then(answer => {
                            const { role, salary, department} = answer
                            db.promise().query('INSERT INTO role (title, salary, department_id) VALUE (?,?,?)', [role, salary, department])
                            .then(answer => console.log(answer))
                        })
                    })

            }

            //     if (answer.view === 'Add an employee') {
            //         inquirer.prompt({
            //             type: 'input',
            //             name: 'employee',
            //             message: 'What is the first name of the employee'

            //             type: 'input',
            //             name: 'employee',
            //             message: 'What is the last name of the employee'

            //             type: 'input',
            //             name: 'employee',
            //             message: 'What is the role of the employee'

            //             type: 'input',
            //             name: 'employee',
            //             message: 'Who is the manager of the employee'

            //             type: 'input',
            //             name: 'employee',
            //             message: 'What is the role of the employee'
            //         })
            //     }



        }
        )
};


init();






