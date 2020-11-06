const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, github, role){ 
        super(name, id, email, github, role);
        this.name = name;
        this.role = "Engineer";
        this.id = id;
        this.email = email;
        this.github = github;   
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;