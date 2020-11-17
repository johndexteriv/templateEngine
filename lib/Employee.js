// Create Employee class to be inherited by subclasses

class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}
	// Class methods to return role, name, id and email values.
	getRole() {
		return "Employee";
	}
	getName() {
		return this.name;
	}
	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
}

module.exports = Employee;
