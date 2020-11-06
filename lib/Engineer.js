const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, role, id, email, github){ 
        super(name, role, email, id);
        this.name = name;
        this.role = "Engineer";
        this.email = email;
        this.id = id;
        this.github = github;   
    }
}

module.exports = Engineer;