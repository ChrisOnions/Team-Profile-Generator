const Employee = require('./Employee')

class Intern extends Employee {
  constructor(employeeName, Id, email, schoolName) {
    super(employeeName, Id, email)
    this.schoolName = schoolName

  }
  get_schoolName() {
    return this.schoolName
  }
  get_Role() {
    return "Intern"
  }
}
module.exports = Intern
