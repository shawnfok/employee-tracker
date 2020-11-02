-- 0: Seeds for SQL table
USE employee_db;

-- 1: Insert Rows into DEPARTMENRT table
INSERT INTO department (name)
VALUES ("Executive"), ("Engineering"), ("Sales"), ("Legal"), ("Human Resources"), ("Finance");

-- 2: Insert Rows into ROLE table
INSERT INTO role (title, salary, department_id)
    -- 2.1: Executive Department
VALUES ("Chief Executive Officer", 230000, 001),
 ("Executive Assistant", 70000, 001),
    -- 2.2: Engineering Department
 ("Engineering Director", 190000, 002),
 ("Senior Engineer", 120000, 002),
 ("Engineer", 60000, 002),
    -- 2.3: Sales Department
 ("Sales Director", 100000, 003),
 ("Senior Sales Representative", 80000, 003),
 ("Sales Representative", 40000, 003),
    -- 2.4: Legal Department
 ("Legal Director", 180000, 004),
 ("Legal Adviser", 120000, 004),
 ("Paralegal", 50000, 004),
    -- 2.5: HR Department
 ("Human Resources Director", 90000, 005),
 ("Human Resources Specialist", 60000, 005),
    -- 2.6: FINANCE Department
 ("Finance Director", 110000, 006),
 ("Senior Accountant", 70000, 006),
 ("Accountant", 55000, 006);

-- 3: Insert Rows into EMPLOYEE table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    -- Executive Department
 VALUES ("Hayden", "Perkins", 101, null),
 ("Lamar", "Oliver", 102, 101),
 ("Kayley", "John", 102, 101),
    -- Engineering Department
 ("Frances", "Li", 201, 101),
 ("Indigo", "Wainwright", 202, 201),
 ("Danyaal", "Dunkley", 202, 201),
 ("Killian", "Kenny", 202, 201),
 ("Elisha", "Copeland", 203, 202),
 ("Whitney", "Hyde", 203, 202),
 ("Mayur", "Blair", 203, 202),
 ("Denny", "Frank", 203, 202),
 ("Talhah", "Fisher", 203, 202),
 ("Cecil", "Shannon", 203, 202),
 ("Tarun", "Steele", 203, 202),
 ("Bessie", "Dalton", 203, 202),
 ("Pedro", "Pham", 203, 202),
 ("Caitlin", "Guest", 203, 202),
 ("Eboni", "Butler", 203, 202),
    -- Sales Department
 ("Kory", "Nichols", 301, 101),
 ("Dominique", "Cousins", 302, 301),
 ("Rebekah", "Connor", 302, 301),
 ("Coen", "David", 303, 301),
 ("Deacon", "Watson", 303, 301),
 ("Taliyah", "Burns", 303, 301),
 ("Rebeca", "Hoover", 303, 301),
    -- Legal Department
 ("Katrina", "Ahmed", 401, 101),
 ("Nico", "Tran", 402, 401),
 ("Ziggy", "Ritter", 403, 401),
 ("Iram", "Wong", 403, 401),
    -- HR Department
 ("Darin", "Sargent", 501, 101), 
 ("Dustin", "Mohammed", 502, 501),
    -- FINANCE Department
 ("Glen", "Pollard", 601, 101), 
 ("Lindsay", "Reader", 602, 601), 
 ("Maxime", "Mcdougall", 603, 601), 
 ("Arvin", "Dawson", 603, 601);
