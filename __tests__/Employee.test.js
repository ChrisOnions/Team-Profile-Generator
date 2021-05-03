const Employee = require('../Lib/Employee')

describe("Emplayee", () => {
  it('soes somthing', () => {
    const name = 'Chris',
      id = '035',
      email = "c.onions101@gmail.com"
    const employee = new Employee(name, id, email)
    expect(employee.name)toequal(name)
    expect(employee.id)toequal(id)
    expect(employee.email)toequal(email)

  })
  describe('testing get methods', () => {
    it('should'() => {
      const name = 'Chris'
      id = 12,
      email = "c.onions101@gmail.com"
      cosnt employee = new Employee(name, id, email)
      expect(employee.getName()).toequal(name)
  })
  //add more tests plz
})
})