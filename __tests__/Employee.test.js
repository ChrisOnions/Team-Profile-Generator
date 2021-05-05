const Employee = require('../lib/Employee');
const { test, expect } = require("@jest/globals");

describe("Employee class", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email, if provide with valid information", () => {
      const employee = new Employee("Chris Onions", 1, "C.onions101@gmail.com");
      expect(employee.name).toEqual("Chris Onions");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("C.onions101@gmail.com");
      expect(employee.role).toEqual("Employee");
    });

    describe("getName", () => {
      it('should return the object "name"', () => {
        const employee = new Employee("Chris", 1, "C.onions101@gmail.com");
        expect(employee.getName()).toEqual("Chris");
      });
    });

    describe("getId", () => {
      it('should return the object "id"', () => {
        const employee = new Employee("Chris", 1, "C.onions101@gmail.com");
        expect(employee.getId()).toEqual(1);
      });
    });

    describe("getEmail", () => {
      it('should return the object "email"', () => {
        const employee = new Employee("Chris", 1, "C.onions101@gmail.com");
        expect(employee.getEmail()).toEqual("C.onions101@gmail.com");
      });
    });

    describe("getRole", () => {
      it('should return the object "role"', () => {
        const employee = new Employee("Chris", 1, "C.onions101@gmail.com");
        expect(employee.getRole()).toEqual("Employee");
      });
    });
  });
});