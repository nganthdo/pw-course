// question 1
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
}
console.log(car.year);

// question 2
const person = {
    name: 'Alice',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
}
console.log (person.name);

// question 3
const student = {
    name: 'Bob',
    grades: {
        math: 4.5,
        english: 4.0,
    }
}
console.log(student.grades['math']);

// question 4
const settings = {
    volume: 75,
    brightness: 50,
}
settings.volume = 80;
console.log(settings.volume);

// question 5
const bike ={

}
bike.color = 'red';
console.log(bike);

// question 6
const employee = {
    name: 'Charlie',
    age: 21,
}
delete employee.age;
console.log(employee);

// question 7
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"],
}