USE staff_db; 

INSERT INTO department(name) 
VALUES
('Development'),
('Product Management'),
('Quality Assurance'),
('Human Resources');

INSERT INTO role(title, salary, department_id)
VALUES
('software engineer', 86000, 1),
('front-end developer', 72000, 1),
('project manager', 101000, 2),
('business analyst', 93000, 2),
('QA Engineer', 81000, 3),
('HR manager', 69000, 4);


INSERT INTO employee(first_name, last_name, role_id, manager_id, manager_name)
VALUES
('Katie', 'Wynn', 2, 1, 'Brandon Wilks'),
('Jade', 'Black', 1, 1, 'Brandon Wilks'),
('Amber', 'Smith', 6, 3, 'Jessica Roe'),
('Carlina', 'Brown', 3, 2, 'Jason Coron'),
('Gianna', 'Chung', 4, 2, 'Jason Coron'),
('Joe', 'Chu', 5, 4, 'Taylor Welsher');



