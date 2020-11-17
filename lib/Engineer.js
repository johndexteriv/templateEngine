const Employee = require("./Employee");
// Engineer class inherits name, id and email from Employee
class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);

		this.github = github;
	}
	// Class methods unique to Engineer class
	getGithub() {
		return this.github;
	}

	getRole() {
		return "Engineer";
	}
}

module.exports = Engineer;
