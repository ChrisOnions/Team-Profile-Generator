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
      message: "whats is the assignged employee id :",
      name: 'Username',
      default: 'Jhon Doe',
    },
  ])
  .then((results))

//end function 
function continueorquit() {
  inquirer([{
    input: "confirm",
    name: "continue"
     message: "would you like to continue"
  }]).then(confrim){
    //if confirm = true run the funtion again if false create the results html and css

  }
}