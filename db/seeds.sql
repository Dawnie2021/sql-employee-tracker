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


INSERT INTO employee(first_name, last_name, manager_id, role_id)
VALUES
('Katie', 'Wynn', NULL, 1),
('Jade', 'Black', NULL, 2),
('Amber', 'Smith', 4, 3),
('Carlina', 'Brown', 3, 4),
('Gianna', 'Chung', 1, 2),
('Joe', 'Chu', 6, 3);



