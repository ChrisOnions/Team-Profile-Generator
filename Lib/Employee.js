class Employee {
  constructor(employeeName, employeeId, email) {
    this.employeeName = employeeName
    this.employeeId = employeeId
    this.email = email
  }
  get_name() {
    return this.employeeName
  }
  get_Id() {
    return this.employeeId
  }
  get_mail() {
    return this.email
  }
  get_Role() {
    this.role
  }
}
module.exports = Employee
