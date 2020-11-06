const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, role, id, email, school){
        super(name, role, email, id);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = "Intern";
    }
}

module.exports = Intern;