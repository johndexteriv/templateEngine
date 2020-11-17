const Employee = require("./Employee");
// Manager class inherits name, id and email from Employee
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}
	// Class methods unique to Manager class
	getOfficeNumber() {
		return this.officeNumber;
	}

	getRole() {
		return "Manager";
	}
}

module.exports = Manager;
