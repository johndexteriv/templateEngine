const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, role, email, id, phone){
    }
    managerPhone = () => {
        return this.phone;
    }
}

module.exports = Manager;