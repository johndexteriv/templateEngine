const Employee = require("./Employee");
// Intern class inherits name, id and email from Employee
class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);

		this.school = school;
	}
	// Class methods unique to Intern class
	getSchool() {
		return this.school;
	}

	getRole() {
		return "Intern";
	}
}

module.exports = Intern;
