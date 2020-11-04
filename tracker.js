const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234567Eight!",
  database: "employee_db"
});

// Initialize the app
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  startWhat();
});

// Landing function after initialization (ADD/VIEW/EXIT)
function startWhat() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "Welcome to Employee Tracker Database! How can we help you?",
    choices: [
      "ADD department/role/employee",
      "VIEW department/role/employee",
      "EXIT"
    ]
  }).then(function (res) {
    if (res.action === "ADD department/role/employee") {
      addWhat();
    } else if (res.action === "VIEW department/role/employee") {
      viewWhat();
    } else {
      exit();
    }
  })
}

// Prompt user what to ADD
function addWhat() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to ADD?",
    choices: ["Department", "Role", "Employee", "GO BACK"]
  }).then(function (res) {
    if (res.action === "Department") {
      addDept();
    } else if (res.action === "Role") {
      addRole();
    } else if (res.action === "Employee") {
      addEmp();
    } else {
      startWhat();
    }
  })
}

// Prompt user what to VIEW
function viewWhat() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to VIEW?",
    choices: ["Departments", "Roles", "Employees", "GO BACK"]
  }).then(function (res) {
    if (res.action === "Departments") {
      viewDepts();
    } else if (res.action === "Roles") {
      viewRoles();
    } else if (res.action === "Employees") {
      viewEmps();
    } else {
      startWhat();
    }
  })
}

// Functions for ADDING
function addDept() {
  console.log("Inserting a new department...\n");
  inquirer.prompt({
    name: "addDept",
    type: "input",
    message: "Enter the new department name:"
  }).then(function (res) {
    connection.query(
      "INSERT INTO department SET ?",
      {
        name: res.addDept
      },
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " department inserted!\n");
      })
      startWhat();
  })
}

function addRole() {
  console.log("Inserting a new role...\n");
  inquirer.prompt([
    {
      name: "addTitle",
      type: "input",
      message: "Enter the new title:"
    },
    {
      name: "addSalary",
      type: "input",
      message: "Enter the salary of the role:"
    },
    {
      name: "addDeptId",
      type: "input",
      message: "Assign an existing department id for the role:"
    }
  ]).then(function (res) {
    connection.query(
      "INSERT INTO role SET ?",
      {
        title: res.addTitle,
        salary: res.addSalary,
        department_id: res.addDeptId
      },
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " role inserted!\n");
      })
      startWhat();
  })
}

function addEmp() {
  console.log("Inserting a new employee...\n");
  inquirer.prompt([
    {
      name: "addFirstName",
      type: "input",
      message: "Enter the first name of the new employee:"
    },
    {
      name: "addLastName",
      type: "input",
      message: "Enter the last name of the new employee:"
    },
    {
      name: "addRoleId",
      type: "input",
      message: "Assign an existing department id for the new employee:"
    },
    {
      name: "addManagerId",
      type: "input",
      message: "Assign an existing manager id for the manager of the new employee (if any):"
    }
  ]).then(function (res) {
    connection.query(
      "INSERT INTO role SET ?",
      {
        first_name: res.addFirstName,
        last_name: res.addLastName,
        role_id: res.addRoleId,
        role_id: res.addManagerId
      },
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " employee inserted!\n");
      })
      startWhat();
  })
}

// Functions for VIEWING
function viewDepts() {
}

function viewRoles() {
}

function viewEmps() {
}

// Ending the app
function exit() {
  connection.end();
}
