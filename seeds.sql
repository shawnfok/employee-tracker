-- 0: Seeds for SQL table
USE employee_db;

-- 1: Insert Rows into DEPARTMENRT table
INSERT INTO department (name)
VALUES ("Executive"), ("Engineering"), ("Sales"), ("Legal"), ("Human Resources"), ("Finance");

-- 2: Insert Rows into ROLE table
INSERT INTO role (title, salary, department_id)
    -- 2.1: Executive Department
VALUES ("Chief Executive Officer", 230000, 001);
VALUES ("Executive Assistant", 70000, 001);
    -- 2.2: Engineering Department
VALUES ("Engineering Director", 190000, 002);
VALUES ("Senior Engineer", 120000, 002);
VALUES ("Engineer", 60000, 002);
    -- 2.3: Sales Department
VALUES ("Sales Director", 100000, 003);
VALUES ("Senior Sales Representative", 80000, 003);
VALUES ("Sales Representative", 40000, 003);
    -- 2.4: Legal Department
VALUES ("Legal Director", 180000, 004);
VALUES ("Legal Adviser", 120000, 004);
VALUES ("Paralegal", 50000, 004);
    -- 2.5: HR Department
VALUES ("Human Resources Director", 90000, 005);
VALUES ("Human Resources Specialist", 60000, 005);
    -- 2.6: FINANCE Department
VALUES ("Finance Director", 110000, 006);
VALUES ("Senior Accountant", 70000, 006);
VALUES ("Accountant", 55000, 006);

-- 3: Insert Rows into EMPLOYEE table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    -- Executive Department
VALUES ("Hayden", "Perkins", 101, null);
VALUES ("Lamar", "Oliver", 102, 101);
VALUES ("Kayley", "John", 102, 101);
    -- Engineering Department
VALUES ("Frances", "Li", 201, 101);
VALUES ("Indigo", "Wainwright", 202, 201);
VALUES ("Danyaal", "Dunkley", 202, 201);
VALUES ("Killian", "Kenny", 202, 201);
VALUES ("Elisha", "Copeland", 203, 202);
VALUES ("Whitney", "Hyde", 203, 202);
VALUES ("Mayur", "Blair", 203, 202);
VALUES ("Denny", "Frank", 203, 202);
VALUES ("Talhah", "Fisher", 203, 202);
VALUES ("Cecil", "Shannon", 203, 202);
VALUES ("Tarun", "Steele", 203, 202);
VALUES ("Bessie", "Dalton", 203, 202);
VALUES ("Pedro", "Pham", 203, 202);
VALUES ("Caitlin", "Guest", 203, 202);
VALUES ("Eboni", "Butler", 203, 202);
    -- Sales Department
VALUES ("Kory", "Nichols", 301, 101);
VALUES ("Dominique", "Cousins", 302, 301);
VALUES ("Rebekah", "Connor", 302, 301);
VALUES ("Coen", "David", 303, 301);
VALUES ("Deacon", "Watson", 303, 301);
VALUES ("Taliyah", "Burns", 303, 301);
VALUES ("Rebeca", "Hoover", 303, 301);
    -- Legal Department
VALUES ("Katrina", "Ahmed", 401, 101);
VALUES ("Nico", "Tran", 402, 401);
VALUES ("Ziggy", "Ritter", 403, 401);
VALUES ("Iram", "Wong", 403, 401);
    -- HR Department
VALUES ("Darin", "Sargent", 501, 101);
VALUES ("Dustin", "Mohammed", 502, 501);
    -- FINANCE Department
VALUES ("Glen", "Pollard", 601, 101);
VALUES ("Lindsay", "Reader", 602, 601);
VALUES ("Maxime", "Mcdougall", 603, 601);
VALUES ("Arvin", "Dawson", 603, 601);
