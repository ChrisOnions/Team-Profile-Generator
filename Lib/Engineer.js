const employee = require('./Employee')

class Engineer extends employee {
  constructor(github, employeeName, Id, email) {
    this.github = github

    super(employeeName, Id, email)
  }
module.exports = Engineer
