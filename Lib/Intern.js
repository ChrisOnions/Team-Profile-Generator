const Employee = require('./Employee')

class Intern extends Employee {
  constructor(employeeName, Id, email, schoolName) {
    super(employeeName, Id, email)
    this.schoolName = schoolName

  }
  getschoolName() {
    return this.schoolName
  }
  get_Role() {
    return "Intern"
  }
}
module.exports = Intern
