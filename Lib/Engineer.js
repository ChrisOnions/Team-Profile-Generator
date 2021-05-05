const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(employeeName, Id, email, github) {
    super(employeeName, Id, email)
    this.github = github
  }
  getgithub() {
    return this.github
  }
  get_Role() {
    return "Engineer"
  }
}
module.exports = Engineer
