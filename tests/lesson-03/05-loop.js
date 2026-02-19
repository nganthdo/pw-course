// total 1-100
let total = 0;
for (let i = 1; i <=100; i++){
    total += i;
}
console.log(total);

// bảng cửu chương 2-9
for (let i = 2; i <=9; i++){
    console.log("Bảng cửu chương", i);
    for (let j = 1; j <=10; j++){
        console.log(i + " x " + j + " = " + (i * j));
    }
}

// mảng chứa số lẻ từ 1-99
let numbers = [];
for (let i = 1; i <100; i++){
    if (i % 2 !== 0){
        numbers.push(i);
    }   
}
console.log(numbers);

// in ra 10 emails dựa trên tên người dùng và số thứ tự
let emails = [];
for (let i = 1; i <=10 ; i++){
    let email = "user" + i + "@example.com";
    emails.push(email);
}
console.log(emails);

// tính tổng doanh thu của 12 tháng trong năm
const object = [
    {month: 1, total: 100},
    {month: 2, total: 200},
    {month: 3, total: 300},
    {month: 4, total: 400},
    {month: 5, total: 500},
    {month: 6, total: 600},
    {month: 7, total: 700},
    {month: 8, total: 800},
    {month: 9, total: 900},
    {month:10, total:1000},
    {month:11, total:1100},
    {month:12, total:1200}
]
let finalTotal = 0;
for (let i = 0; i <object.length; i++){
    finalTotal += object[i].total;
}
console.log(finalTotal);
