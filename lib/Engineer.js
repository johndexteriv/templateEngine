const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, role, email, id, github){    
    }
    gitHub = () => {
        return this.github
    }
}

module.exports = Engineer;