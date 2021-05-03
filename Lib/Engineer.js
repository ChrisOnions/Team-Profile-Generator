const employee = require('./Employee')

class Engineer extends employee {
  constructor(github) {
    this.github = github

    super(employeeName, Id, email)
    this.employeeName = employeeName
    this.employeeId = employeeId
    this.email = email
  }
}
module.exports = Engineer
