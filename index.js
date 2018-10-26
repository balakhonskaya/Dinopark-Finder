const Person = require('./person')
const Park = require('./park')
const Chalk = require('chalk')
const Database = require('./database')

  const mert = new Person('Mert', 33)
  const armagan = new Person('Armagen', 34)

  console.log(mert, armagan)


  const bautzen = new Park('Dinosaur Park Bautzen', 'Saurierpark 1, 02625 Bautzen', '9.00 - 18.00')
  console.log(bautzen)
  var dino = new Park('Park Dino Münchehagen', 'Alte Zollstraße 5, 31547 Rehburg-Loccum', 'daily 9.00 - 18.00')
  console.log(dino)

  armagan.attend(bautzen)
  mert.attend(bautzen)
  mert.attend(dino)
  bautzen.report()
  dino.report()

  console.log(bautzen.attendees)
  console.log(dino.attendees)
  console.log(Chalk.red(armagan.name))

  Database.save(bautzen)
  Database.save(dino)
  const loadedFile = Database.load()
  console.log(loadedFile.attendees)