const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, role, email, id, school){
    }
    internSchool = () => {
        return this.schoool
    }
}

module.exports = Intern;