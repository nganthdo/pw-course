## 1. Git
- **Clone**: là hành động lấy code từ repo về local cá nhân
```command line
git clone <url>
```

- **push** = đưa code từ vùng repository lên server 
```command line
git push <remote name> <branch name>
```

- **pull**
```command line
git put origin <tên nhánh>
```

- **stashing**: lưu tạm những thay đổi trước khi chuyển nhánh
```command line
git stash

// lấy ra lại
git stash pop
```

- **merge request**: gộp code từ 1 nhánh sang nhánh còn lại
```command line
1. create pull request
- add a title: tên pull request
- add description: dạng mark down

2. Reviewer: add reviewer
3. Create Pull Request 
4. Gửi pull request link lên 
```

- **Git Convention**
```command line
<type>: <short description>
type:
feat: tính năng mới
fix: sửa lỗi
conf: thay đổi cấu hình (config)
chore: các thay đổi lặt vặt (xóa file không dùng, đổi tên file...)
---
short-description: mục đích của commit
```

## 2. JS - CLASS
- Class
    - dùng để khai báo kiểu dữ liệu
    - là 1 khuôn mẫu định nghĩa các thuộc tính và phương thức mà đối tượng thuộc class đó sẽ có.

```js
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
}

const student_01 = new Student("Ngan", "Student");
console.log(student_01);
student_01.sayMyNmae();

```

**Tại sao cần dùng Class**
- Tái sử dụng code
- Tăng tính linh hoạt
    - Phương thức: là các hàm được gắn với class ⇒ thường để thực hiện các hành động liên quan đến đối tượng (class) đó.