// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const Intern = require('../lib/intern');
const { test, expect } = require("@jest/globals");
const Employee = require('../lib/Employee');

describe("intern Class", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email, and github if provide with valid information", () => {
      const intern = new Intern("Chris Onions", 1, "C.onions101@gmail.com", 'School of rock')
      expect(intern.schoolName).toEqual('School of rock')
    })
    describe('get_schoolName', () => {
      const intern = new Intern("Chris Onions", 1, "C.onions101@gmail.com", 'School of rock')
      expect(intern.get_Role()).toEqual('Intern')
    })
    describe('get_schoolName', () => {
      const intern = new Intern("Chris Onions", 1, "C.onions101@gmail.com", 'School of rock')
      expect(intern.get_schoolName()).toEqual('School of rock')
    })
  })
})