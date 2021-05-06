const Employee = require('../lib/Employee');
const { test, expect } = require("@jest/globals");

describe("Employee class", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email, if provide with valid information", () => {
      const employee = new Employee("Chris Onions", 1, "C.onions101@gmail.com");
      expect(employee.employeeName).toEqual("Chris Onions");
      expect(employee.employeeId).toEqual(1);
      expect(employee.email).toEqual("C.onions101@gmail.com");
      expect(employee.get_Role()).toEqual("Employee");
    });

    describe("get_Name", () => {
      it('should return the object "name"', () => {
        const employee = new Employee("Chris", 1, "C.onions101@gmail.com");
        expect(employee.get_name()).toEqual("Chris");
      });
    });

    describe("get_Id", () => {
      it('should return the object "id"', () => {
        const employee = new Employee("Chris", 1, "C.onions101@gmail.com");
        expect(employee.get_Id()).toEqual(1);
      });
    });

    describe("get_Email", () => {
      it('should return the object "email"', () => {
        const employee = new Employee("Chris", 1, "C.onions101@gmail.com");
        expect(employee.get_email()).toEqual("C.onions101@gmail.com");
      });
    });

    describe("get_Role", () => {
      it('should return the object "role"', () => {
        const employee = new Employee("Chris", 1, "C.onions101@gmail.com");
        expect(employee.get_Role()).toEqual("Employee");
      });
    });
  });
});