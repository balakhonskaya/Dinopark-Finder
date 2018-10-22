const Chalk = require('chalk')
module.exports = class Park {
    constructor(name, location, hour) {
        this.name = name
        this.location = location
        this.hour = hour
        this.attendees = []
    }
  
    report() {
        console.log(Chalk.bold(this.name), 'Park address is', Chalk.blue(this.location), 'working hours', this.hour, 'and number of attendees are', this.attendees.length)
    }
  }