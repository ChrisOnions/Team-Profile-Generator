const Manager = require('../lib/manager');
const { test, expect } = require("@jest/globals");
const Employee = require('../lib/Employee');

describe("manager Class", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email, and github if provide with valid information", () => {
      const manager = new Manager("Chris Onions", 1, "C.onions101@gmail.com", '1001')
      expect(manager.officeNumber).toEqual('1001')
    })
    describe('get_schoolName', () => {
      const manager = new Manager("Chris Onions", 1, "C.onions101@gmail.com", '1001')
      expect(manager.get_Role()).toEqual('Manager')
    })
    describe('get_schoolName', () => {
      const manager = new Manager("Chris Onions", 1, "C.onions101@gmail.com", '1001')
      expect(manager.office_Number()).toEqual('1001')
    })
  })
})