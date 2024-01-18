INSERT INTO department(name) 
VALUES
(Development),
(Product Management),
(Quality Assurance),
(Human Resources);

INSERT INTO role(title, salary, department_id)
VALUES
('software engineer', 86,000, 1),
('front-end developer', 72,000, 1),
('project manager', 101,000, 2),
('business analyst', 93,000, 2),
('QA Engineer', 81,000, 3),
('HR manager' 69,000, 4),


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Katie', 'Wynn', 2, 4),
('Jade', 'Black', 1, 4),
('Amber', 'Smith', 6, NULL),
('Carlina', 'Brown', 3, 3),
('Gianna', 'Chung', 4, 3),
('Joe', 'Chu', 5, NULL);



