// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, role, email, id, github){
        
    }

    gHub = () => {

        return this.github
    }

}

module.exports = Engineer;