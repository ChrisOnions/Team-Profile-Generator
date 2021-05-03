const inquirer = require("inquirer")
const fs = require("fs")

inquirer
  .prompt([
    {
      type: 'input',
      message: "Please enter Employees name :",
      name: 'Username',
      default: 'Jhon Doe',
    },
    {
      type: 'input',
      message: "Would you like to assign an employee id :",
      name: 'Username',
      default: 'Jhon Doe',
    },

  ])