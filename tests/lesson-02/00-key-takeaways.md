# Tổng hợp các kiến thức đã học trong bài
## 1. Version Control System = hệ thống quản lý phiên bản
- Giúp dễ dàng xem lịch sử thay đổi (thời gian thay đổi, thay đổi gì, ai thay đổi)
- Quay trở về bản thay đổi trước đó
    - Local: lưu ở máy cá nhân
    - Centralize: lưu ở 1 máy chủ tập trung
    - Distributed: lưu ở nhiều máy khác nhau
- Phổ biến nhất là Distributed Version Control System (ex: Git)

### 1.1 Git
- Cha đẻ của GIT là Linux Torvalds
- Tính năng: dễ dùng.
- **Git**: là phần mềm được cài trên máy của mình, là 1 command line tool, công cụ quản lý phiên bản đưa file vào git repo, có các tính năng của vcs
- **Github**: là dịch vụ web, host trên website, là công cụ có giao diện, là nơi để upload git repo lên. Có các tính năng của vcs và 1 số tính năng khác như git copilot

**Git vs Github khác nhau**
- Git: là phần mềm để quản lý file
- Github: là dịch vụ web, cung cấp dịch vụ cho Git 

__3 trạng thái của Git__
1. Working directory: lưu các file mới hoặc file có thay đổi.
2. Staging area: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
3. Repository: Các commit (phiên bản)

__Cấu hình Git__
- Để commit được thì ta cần phải nói cho Git biết ta là ai
- Trong trường hợp mỗi repo muốn 1 tên khác nhau thì sao?
-> set username, password riêng cho từng repo (đứng tại terminal của repo đó)

```command line
git config user.name "Alex"
git config user.email "alex@test.com"
```
__Tổng kết Git__
``` command line
// khởi tạo local repo -> làm 1 lần duy nhất
git init

// thêm file vào staging -> làm mỗi khi có thay đổi
git add .

// commit file -> -> làm mỗi khi có thay đổi
git commit - m "<message>"

// xem trạng thái file (file xanh: vùng staging, file đỏ: vùng working directory)
git status

// kiểm tra danh sách commit
git log

```
**Git - commit convention**

Convention = quy tắc: giúp Cả team làm việc với nhau theo 1 quy tắc, code gọn gàng-sạch đẹp hơn, chuyên nghiệp hơn.

**Convention chung**
- chore: sửa nhỏ lẻ, xóa file, không dùng tới
- feat: thêm tính năng/ test case mới
- fix: sửa lỗi 1 test trước đó

## 2. JS Basic
- Ngôn ngữ lập trình
- Ra đời 1995
- Top programming language
- JS giúp cho browser hoạt động được
- Bình thường JS chạy được do browser engine support. Khi chạy trên máy tính, chúng ta không có browser engine => cần công cụ khác để chạy => NodeJS
- Cú pháp để chạy 1 file trong vs
```javascript
node <file_name>
// nếu file nằm trong folder
node <file path>
```
### 2.1 Biến
- Biến là khái niệm cơ bản trong lập trình, có nghĩa là thay đổi được.

```javascript
// khai báo biến -> từ khóa var/ let
<từ khóa> <tên biến> = <giá trị>

```
- var và let khác nhau như thế nào? khi nào dùng var, khi nào dùng let?
- Về cú pháp: 
    - let ra đời sau, hiện đại và an toàn hơn
    - var ra đồi trước, ít sử dụng hơn
    - var cho phép khai báo lại, let thì không
    - var có phạm vi global, let thì phạm vi theo block
### 2.2 Hằng
- const = hằng là các giá trị không thay đổi được
```javascript
// khai báo hằng -> từ khóa const
<từ khóa> <tên hằng> = <giá trị>
```
__Khi nào dùng biến, khi nào dùng hằng__
- biến có thể thay đổi giá trị
- hằng không thay đổi giá trị
- mặc định dùng const: giúp code an toàn hơn, dễ đọc hơn
- chỉ dùng let khi chắc chắn cần gán lại giá trị
- không dùng var

### 2.3 Kiểu dữ liệu
- Number: số nguyên và số thực (không phân biệt int/ float)
- String: chuỗi
- Boolean: true/ false
- -Làm sao biết 1 biến có kiểu dữ liệu gì?
    - Đọc code khai báo thế nào
    - Sử dụng hàm typeof
### 2.4 Toán tử so sánh
-  Dùng để so sánh 2 toán hạng. Kết quả trả về ở dạng boolean (true/ false)
- Chia làm 3 nhóm:
    - so sánh bằng: == và ===
    - so sánh không bằng: !
    - so sánh lớn/ nhỏ hơn: > < <= >=
- Lưu ý so sánh bằng:
    - == : so sánh sau khi chuyển đổi kiểu
    - === : so sánh cả giá trị và kiểu dữ liệu => nên dùng
- **Khi nào dùng == vs ===?**
- Luôn dùng so sánh ba bằng
- Chỉ dùng == khi có chủ đích muốn so sánh mà không quan tâm kiểu dữ liệu.

### 2.5 Toán tử logic
- && (and) : trả về đúng nếu cả 2 vế của mệnh đề đúng
- || (or) : trả về đúng nếu một trong 2 vế của mệnh đề đúng

### 2.6 Toán tử một ngôi
- Là toán tử chỉ cần một toán hạng để thực hiện
- Prefix: toán tử nằm phía trước -> tăng trước trả về sau
- postfix: toán tử nằm phía sau -> trả về trước, tăng sau

```javascript
let a = 10;
b = ++a // a tăng lên 11 rồi trả về => b có giá trị 11

let c = 10;
d = c++; // trả về giá trị 10 cho d rồi mới tăng => d = 10, c = 11
```
### 2.7 Toán tử toán học
```typescript
+
-
*
/
```

### 2.8 Câu điều kiện
- Kiểm tra 1 đoạn logic trước khi chạy. Nếu đúng mới chạy
```javascript
// câu điều kiện if
if (<điều kiện>){
    //enter code
}
```
### 2.9 Vòng lặp for
- Dùng để lặp 1 đoạn logic, có thể lặp 1 số lần nhất định, hoặc lặp vô hạn, tùy điều kiện dừng
```javascript
// cú pháp for
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>){
    
    //  enter code
    //  điều kiện khởi tạo: chỉ chạy 1 lần duy nhất khi vòng lặp bắt đầu
    //  điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng
    //  cập nhật: chạy vào cuối vòng lặp, thay đổi giá trị biến đếm
}
```
