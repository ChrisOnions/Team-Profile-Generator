const inquirer = require("inquirer")
const fs = require("fs")
const Genteam = require('./Src/Genteam');
const Manager = require('./Lib/Manager');
const Intern = require('./Lib/Intern');
const Engineer = require('./Lib/Engineer');
const generateTeamHtml = require("./Src/Genteam");
const allEmployees = [];

function getData() {
  console.log("Welcome to the Team builder. Please take your time and read all instructions.");
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
      const role = { role: "Manager" }
      let manager = new Manager(data.userName, data.employeeId, data.emailAdress, data.officeNumber);
      const totaldata = { ...role, ...data }
      allEmployees.push(totaldata)
      console.log("Manager has been added");
    })
    .then(() => {
      getEmployee()
    })
    .catch((error) => {
      console.log(error);
    });


}
// Gets new employees info
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
    // Uses the data from the role to ask final question depending on the role selected
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
              let intern = new Intern(data.userName, data.employeeId, data.emailAdress, schooldata.school);
              data
              const totaldata = { ...schooldata, ...data }
              allEmployees.push(totaldata)
              console.log("Intern has been added");
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
              let engineer = new Engineer(data.userName, data.employeeId, data.emailAdress, gitdata.github);
              const totaldata = { ...gitdata, ...data }
              allEmployees.push(totaldata)
              console.log("Engineer has been added");
            })
            .then(() => {
              continueorquit(allEmployees)
            })
          break;
      }
    })
}


//Askes if you would like to add another Employee
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
  fs.writeFile('./dist/index.html', generateTeamHtml(allEmployees), (err) =>
    err ? console.error(err) : console.log('Team HTML File Generated!'));
  console.log('The file has been saved!')
  console.log(allEmployees[1].school);
}
// fs.writeFile('./dist/index.html', generateTeamHtml(allEmployees), (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

getData();