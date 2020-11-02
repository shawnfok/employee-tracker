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
  }).then(function (answer) {
    if (answer.action === "ADD department/role/employee") {
      addWhat();
    } else if (answer.action === "VIEW department/role/employee") {
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
  }).then(function (answer) {
    if (answer.action === "Department") {
      addDept();
    } else if (answer.action === "Role") {
      addRole();
    } else if (answer.action === "Employee") {
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
  }).then(function (answer) {
    if (answer.action === "Departments") {
      viewDepts();
    } else if (answer.action === "Roles") {
      viewRoles();
    } else if (answer.action === "Employees") {
      viewEmps();
    } else {
      startWhat();
    }
  })
}

// Functions for adding
function addDept() {
}

function addRole() {
}

function addEmp() {
}

// Functions for viewing
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
