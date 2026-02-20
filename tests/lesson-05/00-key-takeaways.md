## 1. Function Advance

- **Function Express**: định nghĩa function bằng **cách gán cho nó một biến**

```js
// function declaration (khai báo hàm)
function add(a, b) {
  return a + b;
}

// Function expression (biểu thức hàm)
const add = function (a, b) {
  return a + b;
};

// cách gọi hàm của cả 2 cách đều giống nhau
console.log(add(a, b));
```

## 2.Lambda Fuction
```js
// function truyền thống
function add(a, b) {
  return a + b;
}

// function expression
const add = function (a, b) {
  return a + b;
};

// arrow function (lambda)
const add = (a, b) => {
  return a + b;
};
```
Lambda function: 1 số cách viết khác

```js
// không có tham số => phải có dấu ngoặc tròn rỗng
const greet = () => console.log("Hello");
const getRandom = () => Math.random();

// có 1 tham số => có thể bỏ ngoặc tròn hoặc giữ tuỳ ý
const double = x => x * 2;
const square = x => x * x;

```

## 3. Anonymous function (hàm ẩn danh)

- function không có tên

- được sử dụng khi funciton chỉ cần dùng 1 lần hoặc làm call back

```js
// anonymous function (ko tên)
function() { // syntaxError ! không thể đứng 1 mình
    console.log("I am anonymous");
}

//anonymous function phải được dùng ngay
//1. gán cho biến
const anonymousFunc = function () {
    console.log("I am anonymous but stored in a variable");
};
//2. dùng làm callback
setTimeout(function() {
    console.log("Anonymous callback");
}, 1000);
```

## 4. DOM = Document Object Model

- Có **3 loại selector** thường dùng:
  - **Xpath**
    - Dùng được hầu hết các trường hợp
    - Đa dạng, có khả năng tìm các phần tử khó
    - Hơi dài
  - **CSS selector**
    - Ngắn gọn, performance cao
    - Dùng cho các case dễ tìm
    - Không linh hoạt bằng xpath
  - **Playwright selector**
    - Chỉ dùng riêng cho Playwright
    - Cấu trúc ngắn gọn, không phụ thuộc vào DOM
    - Hướng tới “giống người dùng đang nhìn thấy gì”

- Khi nào nên dùng gì?
  - **Playwright selector → CSS selector → Xpath**

### 4.1 Xpath Selector

- Có **2 loại**:
  - **Tuyệt đối**: đi dọc theo cây DOM
    - Bắt đầu bởi `1/`
  - **Tương đối**: tìm dựa vào đặc tính
    - Bắt đầu bởi `2 //`
  - **Nên dùng Xpath tương đối**

## 5. Playwright basic syntax

- **Automation** = tương tác & verify
- Tương tác với các phần tử:
  - Viết 1 test
  - Tổ chức thành các step
  - Tương tác cơ bản:
    - Navigate
    - Click
    - Fill

- `test`: đơn vị cơ bản để khai báo 1 test

- Tên file: `<file_name>.spec.ts`

- Navigate ⇒ đi đến 1 trang web nào đó
- Locate: sử dụng locator để tương tác trên trang
- Click: 
```js
await test.step("step 2", async () => {
        // enter code
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click();
    });
```

- Input
```js
// Some code
await test.step ("step 3", async () => {
        // enter code
        await page.locator("//input[@id='username']").fill("test"); //set giá trị cho textbox 1 phát
        await page.locator("//input[@id='email']").pressSequentially("test@test.com", {delay: 1_000}); //mô phỏng gõ từng ký tự/phím theo thứ tự
    });

```
- Radio/ Checkbox
```js
// let isCheckedMale = await page.locator("//input[@id='male']").isChecked();
        // console.log(isCheckedMale);

        // await page.locator("//input[@id='male']").check();
        // isCheckedMale = await page.locator("//input[@id='male']").isChecked();
        // console.log(isCheckedMale);
```

- Select Option
```js
// Some code
await test.step("step 5", async () => {
        await page.locator("//select[@id='country']").selectOption('United States');

    });
```

- Upload File
```js
        await page.locator('input[type="file"]').setInputFiles('tests/lesson-05/data-test/data-test.txt');

```