const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, id, email, school, role){
        super(name, id, email, school, role);
        this.name = name;
        this.role = "Intern";
        this.id = id;
        this.email = email;
        this.school = school;
        
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;