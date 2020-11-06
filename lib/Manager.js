const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, role, email, id, phone){
        super(name, role, id, email);
        this.name = name;
        this.role = role;
        this.email = email;
        this.id = id;
        this.phone = phone;
    }
    
}

module.exports = Manager;