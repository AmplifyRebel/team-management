class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.Officenumber = Officenumber;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getOfficenumber(){
        return this.Officenumber
    }
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;

