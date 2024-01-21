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


INSERT INTO employee(first_name, last_name, job_title, department, salary, manager_name)
VALUES
('Katie', 'Wynn', 'Front-end developer', 'Development', 72000, 'Jade Black'),
('Jade', 'Black', 'Software engineer', 'Development', 86000, 'Null'),
('Amber', 'Smith', 'HR manager', 'Human Resources', 69000, 'Null'),
('Carlina', 'Brown', 'Project manager', 'Project Management', 101000, 'Amber Smith'),
('Gianna', 'Chung', 'Business analyst', 'Project Management', 93000, 'Carlina Brown'),
('Joe', 'Chu', 'QA Engineer', 'Quality Assurance', 81000, 'Jade Black');



