const employee = require('./Employee')

class manager extends employee {
  constructor(officeNumber, employeeName, Id, email) {
    this.officeNumber = officeNumber

    super(employeeName, Id, email)
  } getOfficenumber() {
    return this.officeNumber
  }
  get_Role() {
    return "Manager"
  }
}
module.export = Engineer
