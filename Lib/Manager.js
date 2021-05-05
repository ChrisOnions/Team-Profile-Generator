const Employee = require('./Employee');

class Manager extends Employee {
  constructor(employeeName, Id, email, officeNumber) {
    super(employeeName, Id, email)
    this.officeNumber = officeNumber

  };
  get_Role() {
    return "Manager"
  };
  officeNumber() {
    return this.officeNumber
  };
};

module.exports = Manager;


