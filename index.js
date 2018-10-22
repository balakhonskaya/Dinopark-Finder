const Person = require('./person')
const Park = require('./park')
const Chalk = require('chalk')
const Database = require('./database')

console.log('Hello World');

const add = (num1, num2) => num1 + num2
const additionResult = add(4,7)
const multiply = (num1, num2) => num1 * num2
//console.log(additionResult)
const multiplyResult = multiply(additionResult,6)
//console.log(multiplyResult)


  const mert = new Person('Mert', 33)
  const armagan = new Person('Armagen', 34)

  console.log(mert, armagan)


  const bautzen = new Park('Dinosaur Park Bautzen', 'Saurierpark 1, 02625 Bautzen', '9.00 - 18.00')
  console.log(bautzen)

  armagan.attend(bautzen)
  mert.attend(bautzen)
  bautzen.report()

  console.log(bautzen.attendees)
  console.log(Chalk.red(armagan.name))

  Database.save(bautzen)
  const loadedFile = Database.load()
  console.log(loadedFile.attendees)