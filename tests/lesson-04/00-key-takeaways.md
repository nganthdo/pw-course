# 1. Biến và phạm vi của biến
- Phạm vi (scope) xác định nơi mà biến có thể truy cập
-JS có 3 phạm vi:
    - Block scope (khối)
    - Function scope (hàm)
    - Toàn cục (global)
- Function Scope (hàm): biến dc khai báo bên trong 1 hàm. Cả let, var, const ra ngoài hàm đều bị undefined.
- Toàn cục (global): biến dc khai báo ở 1 dòng code tự do, không nằm trong khối hay hàm nhưng có thể sử dụng bên trong hàm.
- Cố gắng khai báo biến trong phạm vi nhỏ nhất có thể.

# 2. Break & Continue
- break: làm cho vòng lặp dừng ngay lập tức khi đạt điều kiện.
- continue: dùng để bỏ qua phần còn lại của vòng lặp.

# 3.Câu điều kiện nâng cao
- if...else: thực thi code khác nhau cho trường hợp true vs false
- if...else...if: kiểm tra nhiều điều kiện theo thứ tự
# 4. Toán tử điều kiện
- cách viết ngắn gọn của toán tử if...else
```javascript
let xepHang;
if (age>18){
    xepHang = "nguoi lon";
} else {
    xepHang = "tre em";
}
// 
const age = 23;
let xepHang = age > 18 ? "nguoi lon" : "tre em";
console.log(xepHang);
```
# 5. Vòng lặp nâng cao
- **for ... in loop**: dùng để duyệt qua các thuộc tính  của 1 object
- trong thực tế thì cũng hay dùng for ... in, kiểm tra object có đúng key/ value hay không (trong API testing)
```javascript
for (let key in object){
// Some code
}
```

- forEach: method của array để thực thi 1 function cho mỗi phần tử. Không thể dùng break || continue

```javascript
const numbers = [1,2,3,4,5];
number.forEach(function(value){
    console.log(value);
});
```
# 6. Utils function
- Utils = tiện ích
- Là các hàm có sẵn của js và giúp cho việc code trở nên nhanh gọn hơn
    - String utils: xử lý chuỗi
        - Bỏ khoảng trắng;
            - .trim() : bỏ khoảng trắng 2 đầu
            - .trimStart(): bỏ khoảng trắng bên trái
            - .trimEnd(): bỏ khoảng trắng bên phải
        - Chuyển đổi upper case <-> lower case
            - .toUpperCase: chữ thường thành chữ hoa
            - .toLowerCase: chữ hoa thành chữ thường
        - kiểm tra substring
            - .includes("text");
        - tách chuỗi
            - .split(" "); -> cách chuỗi theo khoảng trắng
            - .split(" ");  -> 
        - thay thế ký tự trong chuỗi
            -.replace("text", "replaceText");
- Array utils: xử lý mảng
    - Thêm phần tử vào array
        - push(<phần tử>) -> thêm vào cuối
        - unshift(<phần tử>) -> thêm vào đầu
        - splice(<vị trí>,<số phần tử cần xóa>,<số phần tử cần thêm vào>)  -> thêm vào giữa
    - Xóa phần tử khỏi array
        - pop(<phần tử>) -> xóa cuối
        - shift(<phần tử>) -> xóa đầu
        - splice(<vị trí>,<số phần tử cần xóa>) -> xóa giữa
    - Tìm kiếm (find, filter)
        - find() -> trả về phần từ đầu tiên hợp lệ.
        ```javascript
        const numbers = [5,12,8,130,44];
        // find() - trả về phần tử đầu tiên > 10
        let first = numbers.find(num => num > 10);
        console.log(first); //12

        //filter - trả về 1 mảng chứa tất cả các phần tử > 10
        let all = numbers.filter(num => num > 10);
        console.log(all); //12, 130, 44
        ```
        - filter() -> trả về tất cả phần từ hợp lệ

    -Biến đổi mảng (map)
        -map: tạo mảng mới bằng cách áp dụng 1 hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài.
```javascript

let  numbers = [1,2,3,4,5];
// nhân mỗi phần tử với 2
let double = numbers.map(num => num * 2);
console.log(doubled);
//[2,4,6,8,10]

```

-Sắp xếp mảng (sort)
```javascript
const numbers = [0,1,2,3,4,5];
// sap xep tang dan
numbers.sort((a,b) => a - b);
console.log(numbers);

// sắp xếp giảm dần
numbers.sort((a,b) => b - a);
console.log(numbers);
```
