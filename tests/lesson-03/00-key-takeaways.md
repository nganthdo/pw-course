# Git
**1. Undo Actions**
- Quay từ vùng staging area lại vùng working directory
```command line
git restore --staged <file name>
git restore --staged .
```
- Đưa từ vùng Repository lại vùng working directory
```command line
git reset HEAD~<so commit>
ex: git reset HEAD~2
```

**2. Branch model - Nhánh**

- Sử dụng branch để tạo ra các phiên bản riêng của code, tránh ảnh hưởng đến bản gốc
- Khi khởi tạo repo (git init), nhánh mặc định sẽ được tạo ra
- Lưu ý: luôn pull code về trước khi tạo nhánh mới
```command line
// tạo nhánh -> nhánh mới sẽ copy giống hệt nhánh hiện tại
git branch <ten nhanh>

// xem có những nhánh nào có trên thư mục hiện tại
git branch

// switch sang nhánh
git checkout <ten nhanh>

// vừa tạo nhánh vừa chuyển sang nhánh mới cùng 1 lúc
git checkout -b <tên nhánh>

// xóa nhánh: đứng ở nhánh khác trước khi xóa, k thể xóa nhánh mà mình đang ở tại nhánh đó
git branch -D <tên nhánh>
```

**3. Git Ignore**
- .gitignore -> là file cấu hình quan trọng trong git, giúp chỉ định những file & thư mục không được theo dõi (untracked) bởi Git
- Tại sao cần gitignore
    - Nhiều file không cần thiết phải đưa vào git repo
        - File tạm thời của hệ điều hành
        - File build
        - File cấu hình cá nhân
        - File nhạy cảm (API Key)
        - File log và database local


# Javascript
**1. Convetion = quy tắc**

- Code theo format chung dễ nhìn
-Giúp dễ đọc code
- Có nhiều loại convention:
    - Đặt tên file
    - Đặt tên biến
    - Đặt tên commit...
- Một số convention phố biến:
    - snake_case (ex: do_thuy_ngan) -> **tạm thời không dùng**
    - kebab-case (ex: do-thuy-ngan) -> **đặt tên file và folder**
    - camelCase (ex: doThuyNgan) -> **đặt tên biến**
    - PascalCase (ex: DoThuyNgan) -> **đặt tên class**
    - UPPER_CASE (ex: DO_THUY_NGAN)

**2. Console log**

- Sử dụng  với nháy đơn, nháy kép
- Sử dụng kèm với variable
```javascript
let name = "Ngan"
console.log ('Toi ten la ${name}');
```

- Sử dụng cộng chuỗi
```javascript
console.log("Toi ten la" + "Ngan");
```

**3. Object**

- Là 1 trong những kiểu dữ liệu quan trọng nhất của JS, dùng để lưu trữ dữ liệu dạng key-value
- Cú pháp:
```command line
    <key>: giống quy tắc đặt tên biến
    <value>: chứa giá trị, có thể là String, Number, Boolean hoặc là 1 object khác
```
```json
const/ let <variable_name> = {
    key1: value1,
    key2: value2,
    ...
}
```

- Truy xuất giá trị của object
    - Sử dụng dấu chấm
    - Sử dụng dấu ngoặc vuông
- Khi nào nên dùng gì?
    - Dùng dấu chấm: nếu key không chứa dấu cách, ký tự đặc biệt
    - Dấu ngoặc vuông: nếu key chứa dấu cách hoặc ký tự đặc biệt

**4. Array - mảng**
- Khai báo
    - const arr = [3,7,9];
- Sử dụng
    - console.log(arr[0]);
- Truy xuất mảng
    - độ dài array: length
    - lấy phần tử theo index [0], [1], [2]

**5. Function - hàm**
- Là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ
```javascript
function <nameFunction> {
    // Some code
}
```