class Employee {
    constructor(name, role, id, email){
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }
    getRole(){
        return this.role;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
}

module.exports = Employee;