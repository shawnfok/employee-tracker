const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "0000",
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
    message: "Welcome to Employee Tracker Database! What would you like to do?",
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
  console.log("Adding a new department...\n");
  inquirer.prompt({
    name: "newDept",
    type: "input",
    message: "Enter the new department name:"
  }).then(function (res) {
    connection.query(
      "INSERT INTO department SET ?",
      {
        name: res.newDept
      },
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " department added!\n");
      })
    startWhat();
  })
}

function addRole() {
  console.log("Addinging a new role...\n");
  inquirer.prompt([
    {
      name: "newTitle",
      type: "input",
      message: "Enter the title of the new role:"
    },
    {
      name: "newSalary",
      type: "input",
      message: "Enter the salary of the new role:"
    },
    {
      name: "deptAssign",
      type: "list",
      choices: function () {
        var deptArr = [];
        for (let i = 0; i < res.length; i++) {
          deptArr.push(res[i].name);
        }
        return deptArr;
      }
    }
  ]).then(function (res) {
    let deptId;
    for (let j = 0; j < res.length; j++) {
      if (res[j].name == answer.deptChoice) {
        deptId = res[j].id;
      }
    }
    connection.query(
      "INSERT INTO role SET ?",
      {
        title: res.newTitle,
        salary: res.newSalary,
        department_id: deptId
      },
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " role added!\n");
      })
    startWhat();
  })
}

function addEmp() {
  console.log("Adding a new employee...\n");
  inquirer.prompt([
    {
      name: "newFirst",
      type: "input",
      message: "Enter the first name of the new employee:"
    },
    {
      name: "newLast",
      type: "input",
      message: "Enter the last name of the new employee:"
    },
    {
      name: "roleAssign",
      type: "list",
      message: "What is the new employee's role?",
      choices: function () {
        const roleArr = [];
        for (let i = 0; i < res.length; i++) {
          roleArr.push(res[i].title);
        }
        return roleArr;
      }
    },
    {
      name: "ManagerAssign",
      type: "input",
      message: "Assign an existing manager id for the manager of the new employee (if any):",
      choices: function () {
        const ManagerArr = [];
        for (let i = 0; i < res.length; i++) {
          ManagerArr.push(res[i].manager_id);
        }
        return ManagerArr;
      }
    }
  ]).then(function (res) {
    connection.query(
      "INSERT INTO role SET ?",
      {
        first_name: res.newFirst,
        last_name: res.newLast,
        role_id: res.roleAssign,
        manager_id: res.ManagerAssign
      },
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " employee added!\n");
      })
    startWhat();
  })
}

// Functions for VIEWING
function viewDepts() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table("All departments:", res);
    startWhat();
  })
}

function viewRoles() {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table("All roles:", res);
    startWhat();
  })
}

function viewEmps() {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table("All employees:", res);
    startWhat();
  })
}

// Ending the app
function exit() {
  connection.end();
}
