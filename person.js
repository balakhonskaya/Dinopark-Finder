module.exports = class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
  
    attend(park) {
        park.attendees.push(this)
    }
  }