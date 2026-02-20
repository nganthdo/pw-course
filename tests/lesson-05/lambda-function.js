//1.
const text = (name) => {
    return `Hello, ${name}`;

};
console.log(text("Ngan"));
//2.
const value = (price, quantity, discount) => {
    return price * quantity - discount;
};
console.log(value(5,10,2));