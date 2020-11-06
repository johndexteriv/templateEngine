const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, phone, role){
        
        super(name, id, email, phone, role);
        this.name = name;
        this.role = "Manager";
        this.email = email;
        this.id = id;
        this.phone = phone;
        
    }

    getOfficeNumber(){
        return this.phone;
    }
}

module.exports = Manager;