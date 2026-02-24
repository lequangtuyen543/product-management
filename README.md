# 📦 Product Management System

**Một dự án quản lý sản phẩm theo hướng Server-Side Rendering (SSR)**
Công nghệ sử dụng: **MongoDB + Express + Pug + Bootstrap + Node.js**

Dự án bao gồm đầy đủ các tính năng từ CRUD sản phẩm, danh mục, phân quyền, tài khoản, giỏ hàng, đặt hàng, cho đến realtime chat.

---

## 🚀 Công nghệ sử dụng

* **Node.js** – Backend, NPM, Module, Nodemon
* **Express.js** – Router, Middleware, MVC
* **MongoDB & Mongoose** – Database, Schema, Validate
* **Pug** – Server-side rendering
* **Bootstrap 4** – Giao diện Admin & Client
* **CKEditor** – Soạn thảo nội dung
* **Socket.IO** – Realtime chat
* **Cloud Storage** – Upload ảnh & avatar
* **JWT / Session** – Xác thực & phân quyền

---

## ✨ Tính năng chính

### 🛒 **Client**

* Danh sách sản phẩm (phân trang, lọc, tìm kiếm)
* Trang chi tiết sản phẩm
* Sản phẩm nổi bật & mới nhất
* Bài viết: nổi bật, mới nhất, theo danh mục
* Giỏ hàng & đặt hàng
* Đăng ký / đăng nhập / quên mật khẩu
* Thông tin cá nhân người dùng
* Chat realtime & trạng thái online

---

### 🔧 **Admin**

* Quản lý sản phẩm (CRUD, upload ảnh, trạng thái, sắp xếp)
* Quản lý danh mục & bài viết (CKEditor)
* Quản lý người dùng, avatar
* Quản lý roles & phân quyền
* Dashboard, trang 404, cài đặt website
* Logs: `createdBy` / `updatedBy` / `deletedBy`
* Chat realtime, phòng chat, kết bạn

---

## 📝 Lịch sử phát triển dự án

<details>
  <summary><strong>📜 Lịch sử commit chi tiết (Click để mở)</strong></summary>

---

### 📘 Bài 14: NPM, NodeJS, Express (Tiết 1)

* Khởi tạo project NodeJS với NPM
* Cấu trúc project NodeJS cơ bản
* Làm quen Module, Nodemon, Routing
* Khởi tạo Express App (Express Generator)
* Cấu trúc Express: Router, View, Controller

---

### 📘 Bài 15: NodeJS, Express, MongoDB, Mongoose (Tiết 2)

* Nhúng giao diện (5 template)
* Cấu hình Router + Prefix `/admin`
* Xây dựng trang 404 Error
* Cài đặt MongoDB & Mongoose
* Xây dựng trang quản lý sản phẩm (cơ bản)
* Hiển thị danh sách sản phẩm

---

### 📘 Bài 16: NodeJS, Express, MongoDB, Mongoose (Tiết 3)

* Lọc danh sách sản phẩm theo trạng thái
* Tìm kiếm sản phẩm
* Phân trang danh sách sản phẩm

---

### 📘 Bài 17: NodeJS, Express, MongoDB, Mongoose (Tiết 4)

* Thay đổi trạng thái 1 sản phẩm
* Xóa sản phẩm (soft delete)
* Thay đổi trạng thái nhiều sản phẩm

---

### 📘 Bài 18: NodeJS, Express, MongoDB, Mongoose (Tiết 5)

* Xóa nhiều sản phẩm
* Thay đổi trạng thái đơn hàng
* Hiển thị thông báo (status, delete, update)
* Thêm mới sản phẩm
* Validate dữ liệu sản phẩm

---

### 📘 Bài 19: NodeJS, Express, MongoDB, Mongoose (Tiết 6)

* Chỉnh sửa sản phẩm
* Tối ưu cấu trúc source code
* Deploy project chạy thực tế

---

### 📘 Bài 20: NodeJS, Express, MongoDB, Mongoose (Tiết 7)

* Xây dựng trang quản lý sản phẩm nâng cao
* Lưu thông tin chi tiết sản phẩm
* Sắp xếp sản phẩm theo nhiều tiêu chí
* Tích hợp CKEditor cho nội dung sản phẩm

---

### 📘 Bài 21: NodeJS, Express, MongoDB, Mongoose (Tiết 8)

* Xây dựng quản lý nhóm người dùng (Roles)
* Quản lý tài khoản người dùng
* Phân quyền hệ thống
* Tối ưu code Back-end

---

### 📘 Bài 22: NodeJS, Express, MongoDB, Mongoose (Tiết 9)

* Quản lý danh mục sản phẩm
* Upload hình ảnh danh mục
* Upload avatar người dùng

---

### 📘 Bài 23: NodeJS, Express, MongoDB, Mongoose (Tiết 10)

* Hoàn thiện upload avatar
* Validate dữ liệu nâng cao
* Xây dựng quản lý bài viết
* Xây dựng giao diện Front-end

---

### 📘 Bài 24: NodeJS, Express, MongoDB, Mongoose (Tiết 11)

* Hiển thị bài viết nổi bật
* Hiển thị bài viết mới nhất
* Hiển thị bài viết theo danh mục
* Xây dựng layout tổng thể website
* Trang chi tiết bài viết

---

### 📘 Bài 25: NodeJS, Express, MongoDB, Mongoose (Tiết 12)

* Hoàn thiện trang chi tiết bài viết
* Đăng nhập trang quản trị
* Phân quyền Admin
* Tối ưu Back-end

---

### 📘 Bài 26: NodeJS, Express, MongoDB, Mongoose (Tiết 13)

* Tối ưu Front-end
* Deploy project production

---

### 📘 Bài 27: Socket.IO (Tiết 01)

* Tổng quan Socket.IO
* Tích hợp Socket.IO với NodeJS
* Emit & Listen sự kiện
* Xây dựng hệ thống chat realtime
* Đăng nhập / đăng xuất chat

---

### 📘 Bài 28: Socket.IO (Tiết 02)

* Chat realtime cơ bản & nâng cao
* Hiển thị người dùng online

---

### 📘 Bài 29: Socket.IO (Tiết 03)

* Tối ưu code Socket.IO
* Quản lý phòng chat
* Truy cập phòng chat
* Chat theo từng phòng

---

### 📘 Bài 30: Socket.IO (Tiết 04)

* Hoàn thiện chat theo phòng
* Chức năng kết bạn cơ bản & nâng cao

---

### 📘 Bài 31: Socket.IO (Tiết 05)

* Hoàn thiện chức năng kết bạn
* Tối ưu toàn bộ source code

---

</details>

---
## 👤 Tài khoản demo

```txt
Email: levana@gmail.com
Password: 1
```
```txt
Email: levanb@gmail.com
Password: 1
```
---

## 📧 Liên hệ
Email: lequangtuyen543@gmail.com
