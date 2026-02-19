// bài 1
function multiply(a, b) { // tạo 1 hàm có tên là mutiply với 2 tham số truyền vào là a và b
    return a * b; // trả về kết quả của phép nhân a và b
}
console.log("Mutiply result is: ",multiply(5, 8)); // gọi lại hàm multiply với 2 giá trị truyền vào là 5 và 8, sau đó in ra kết quả bằng console log

// bài 2
function findMin(a,b,c){ // khai báo hàm findMin với 3 tham số truyền vào là a,b,c
    if (a < b && a <c){
        return a;
    } else if (b < a && b < c){
        return b;   
    } else {
        return c;
    }
}
console.log("Min number is: ", findMin(3, 5, 2)); // gọi lại hàm findMin với 3 giá trị truyền vào là 3, 5 và 2, sau đó in ra kết quả bằng console log
console.log("Min number is: ",findMin(1, 5, 2));

// bài 3
const students = [
    { name: "Anna", score: 4.5 },
    { name: "Henry", score: 5.0 },
]; // khai báo 1 mảng có tên Students chứa 2 object, mỗi object chứa name và score.

const threshold = 5.0; // khai báo ngưỡng điểm để coi là top.
function getTopStudent(students, threshold) { // tạo 1 hàm có tên là getTopStudent với 2 tham số truyền vào là students, threshold
    const topStudents = []; // khai báo 1 mảng rỗng để lưu trữ các tên có score >= threshold.
    for (let i = 0; i < students.length; i++) { // sử dụng vòng lặp for để duyệt qua tất cả các phần tử trong mảng students
        if (students[i].score >= threshold) { // nếu điểm của học sinh lớn hơn hoặc bằng ngưỡng threshold
            topStudents.push(students[i].name); //thêm tên của học sinh đó vào mảng topStudents
        }
    }
    return topStudents; // trả về mảng topStudents chứa tên của các học sinh có điểm lớn hơn hoặc bằng ngưỡng threshold
}
console.log("Top server: ", getTopStudent(students, threshold)); // gọi lại hàm getTopStudent với 2 giá trị truyền vào là students và threshold, sau đó in ra kết quả bằng console log


// bài 4
let total = 0;
function calculateInterst(principal, rate, years) { // tạo 1 hàm có tên là calculateInterest với 3 tham số truyền vào là principal, rate và years
    total = (principal + principal * rate * years) / 100;
    return total; // trả về kết quả của phép tính tổng số tiền sau khi đã tính.
}
console.log("CalculateInterst is: ", calculateInterst(10, 5, 2)); // gọi lại hàm calculateInterest với 3 giá trị truyền vào là 1000, 5 và 2, sau đó in ra kết quả bằng console log