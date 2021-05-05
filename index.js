const inquirer = require("inquirer")
const fs = require("fs")

const Employee = require('./Lib/Employee');
const Manager = require('./Lib/Manager');
const Intern = require('./Lib/Intern');
const Engineer = require('./Lib/Engineer');
let allEmployees = [];

function getData() {
  console.log("Welcome to the Team builder please take your time and read all instructions. Enjoy");
  const managerQuestions = [
    {
      type: 'input',
      message: "Please enter managers name",
      name: 'userName',
      default: 'Jhon Doe',
    },
    {
      type: 'input',
      message: "Whats is managers assignged employee id :",
      name: 'employeeId',
      default: '1001',
    },
    {
      type: 'input',
      message: "Please enter managers email address.",
      name: 'emailAdress',
      default: 'JhonDoe@gmail.com',
    },
    {
      type: 'input',
      message: "Please enter managers office Number?",
      name: 'officeNumber',
      default: '1',
    },
  ]

  inquirer
    .prompt(managerQuestions)
    .then((data) => {
      manager = new Manager(data.userName, data.employeeId, data.emailAdress, data.officeNumber);
      allEmployees.push(manager)
      console.log(manager);
    })
    .then(() => {
      getEmployee()
    })
    .catch((error) => {
      console.log(error);
    });


}
function getEmployee() {

  inquirer
    .prompt([

      {
        type: 'input',
        message: "Please enter new Employee name",
        name: 'userName',
        default: 'Joe Blow',
      },
      {
        type: 'input',
        message: "Please enter new employees assignged employee id :",
        name: 'employeeId',
        default: '0012',
      },
      {
        type: 'input',
        message: "Please enter email address.",
        name: 'emailAdress',
        default: 'JoeBlow@gmail.com',
      },
      {
        type: 'list',
        message: "What role is this employee?",
        name: 'role',
        choices: ['Intern', 'Engineer'],
        default: 'Intern',
      }
    ])

    .then((data) => {
      switch (data.role) {
        case 'Intern':
          inquirer
            .prompt([
              {
                type: "input",
                name: "school",
                message: `What is your intern's school?`,
                default: 'School of rock',
              },
            ])
            .then((schooldata) => {
              intern = new Intern(data.userName, data.employeeId, data.emailAdress, schooldata.school);
              allEmployees.push(intern)
            })
            .then(() => {
              continueorquit()
            })
          break;
        case 'Engineer':
          inquirer
            .prompt([
              {
                type: "input",
                name: "github",
                message: `What is your engineer's GitHub??`,
                default: 'https://github.com/ChrisOnions',
              },
            ])
            .then((gitdata) => {
              engineer = new Engineer(data.userName, data.employeeId, data.emailAdress, gitdata.github);
              allEmployees.push(engineer)
            })
            .then(() => {
              continueorquit(allEmployees)
            })
          break;
      }
    })
}


//would you like to create another person
function continueorquit(data) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "CorQ",
        message: "Would you like to Add Another employee",
        choices: ['Yes', 'No']
      },
    ])
    .then(quitData => {
      switch (quitData.CorQ) {
        case 'Yes': getEmployee()
          break
        case 'No': createWebsite()
          break
      }
    })


}
// Creates html css and anything else needed
function createWebsite() {
  console.log(allEmployees)

}
getData();