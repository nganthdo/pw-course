// class student
// class name: PascalCase
class Student {
    // thuộc tính property
    name;
    role;

    // hàm khởi tạo constructor
    constructor(name, role){
        this.name = name;
        this.role = role;
    }
    // phương thức method
    sayMyNmae(){
        console.log(`My name is ${this.name} `);

    }

    saySomething(message){
        console.log(`learning ${message}`);
    };
}

const student_01 = new Student("Ngan", "Student");
console.log(student_01);
student_01.sayMyNmae();
student_01.saySomething("auto");