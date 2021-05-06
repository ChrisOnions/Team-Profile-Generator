const Engineer = require('../lib/Engineer');
const { test, expect } = require("@jest/globals");


describe("Engineer Class", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email, and github if provide with valid information", () => {
      const engineer = new Engineer("Chris Onions", 1, "C.onions101@gmail.com", 'https://github.com/ChrisOnions')
      expect(engineer.github).toEqual('https://github.com/ChrisOnions')
    })
    describe('get_github', () => {
      const engineer = new Engineer("Chris Onions", 1, "C.onions101@gmail.com", 'https://github.com/ChrisOnions')
      expect(engineer.get_Role()).toEqual('Engineer')
    })
    describe('get_github', () => {
      const engineer = new Engineer("Chris Onions", 1, "C.onions101@gmail.com", 'https://github.com/ChrisOnions')
      expect(engineer.get_github()).toEqual('https://github.com/ChrisOnions')
    })
  })
})

// describe("get_github"() => {
//   it('should return this.github /name', () => {
//   const engineer = new Engineer("Chris Onions", 1, "C.onions101@gmail.com", 'https://github.com/ChrisOnions')
//     expect(engineer.get_github()).toEqual('https://github.com/ChrisOnions')
//   })
// })