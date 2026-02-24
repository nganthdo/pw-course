class Customer {
    
    // declare property
    id: number;
    name: string;
    email: string;
    phone: string;

    // constructor
    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    // method: displayInfo
    displayInfo() {
        console.log(`Customer Information: ${this.id} - ${this.name}, ${this.email}, ${this.phone}`);

    }

    // method: updateEmail
    updateEmail(newEmail: string){
       this.email = newEmail;
    }

}
const customer01 = new Customer(1, "Emma","emma@test.com",  "12203904");
customer01.displayInfo();
// update new email
customer01.updateEmail("emma01@test.com");
customer01.displayInfo();