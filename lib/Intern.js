// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, role, email, id, school){
        
    }

    internSchool = () => {

        return this.schoool
    }

}

module.exports = Intern;