# 📦 Product Management System

**Một dự án quản lý sản phẩm theo hướng Server-Side Rendering (SSR)**
Công nghệ sử dụng: **MongoDB + Express + Pug + Bootstrap + Node.js**

Dự án bao gồm đầy đủ các tính năng từ CRUD sản phẩm, danh mục, phân quyền, tài khoản, giỏ hàng, đặt hàng, cho đến realtime chat.

---

## 🚀 Công nghệ sử dụng

* **Node.js** – Backend chính
* **Express.js** – Xử lý routing & middleware
* **MongoDB / Mongoose** – Lưu trữ & quản lý dữ liệu
* **Pug** – Templating engine SSR
* **Bootstrap 4** – Giao diện & UI
* **Cloud storage** – Upload file tĩnh
* **TinyMCE** – Rich text editor

---

## ✨ Tính năng chính

### 🛒 **Client**

* Danh sách sản phẩm có phân trang, lọc, tìm kiếm
* Trang chi tiết sản phẩm
* Hiển thị sản phẩm nổi bật / mới nhất
* Giỏ hàng, cập nhật số lượng, xóa
* Đặt hàng, lưu thông tin
* Đăng ký / đăng nhập / quên mật khẩu
* Hiển thị thông tin cá nhân
* Mini cart trên header
* Realtime chat

### 🔧 **Admin**

* Quản lý sản phẩm (CRUD, upload ảnh, sắp xếp thứ tự, trạng thái…)
* Quản lý danh mục
* Quản lý vai trò (roles) & phân quyền
* Quản lý tài khoản
* Dashboard thống kê
* Logs: createdBy / deletedBy / updatedBy
* Cài đặt chung website
* Chat realtime với user

---

## 📂 Cấu trúc dự án

```txt
config/
controllers/
helpers/
middlewares/
models/
public/
routes/
validates/
views/
```

---

## 📝 Lịch sử phát triển dự án

Click để xem toàn bộ quá trình phát triển (rất đầy đủ):

<details>
  <summary><strong>📜 Lịch sử commit đầy đủ (Click để mở)</strong></summary>

Tạo project
Cấu hình folder controllers
Cấu hình .env
Cấu trúc lại folder PUG
Nhúng Bootstrap 4 – Nhúng file tĩnh
Sửa layout
Insert Data
Cài đặt Mongoose

### 👉 Làm trang sản phẩm client

* Tạo trang tổng quan
* Layout chung
* Danh sách sản phẩm
* Lọc theo trạng thái
* Tìm kiếm (Phần 1 & 2)
* Tối ưu bộ lọc
* Tối ưu tìm kiếm

### 👉 Phân trang

* Thêm phân trang
* Tối ưu phân trang

### 👉 CRUD sản phẩm

* Thay đổi trạng thái (1 sản phẩm & nhiều sản phẩm)
* Xóa mềm & xóa vĩnh viễn
* Xóa nhiều sản phẩm
* Thay đổi thứ tự sản phẩm
* Thông báo sau khi đổi trạng thái / xóa / đổi vị trí
* Tạo mới sản phẩm
* Upload ảnh sản phẩm
* Validate dữ liệu
* Chỉnh sửa sản phẩm
* Trang chi tiết sản phẩm (admin & client)

### 👉 Cấu hình DevOps

* MongoDB Atlas
* Deploy online
* Upload file tĩnh lên Cloud

### 👉 Tính năng nâng cao

* Sắp xếp sản phẩm theo nhiều tiêu chí
* TinyMCE Editor

### 👉 Quản lý danh mục

* Xây dựng phần quản lý (Phần 1 & 2)
* Fix lỗi số thứ tự
* Upload ảnh
* Chỉnh sửa danh mục

### 👉 Quản lý roles & phân quyền

* Tạo collection roles
* Danh sách + thêm mới nhóm quyền
* Chỉnh sửa nhóm quyền
* Thực hiện phân quyền (2 phần)

### 👉 Quản lý tài khoản

* Danh sách tài khoản
* Đăng nhập, đăng xuất
* Middleware bảo vệ route
* Authorization (views + server)
* Logs: createdBy / deletedBy / updatedBy

### 👉 Client – User Features

* Trang thông tin cá nhân
* Menu chung client
* Sản phẩm nổi bật
* Sản phẩm mới nhất
* Danh sách + chi tiết sản phẩm client
* Kết quả tìm kiếm

### 👉 Giỏ hàng & đặt hàng

* Thêm vào giỏ
* Mini cart header
* Trang giỏ hàng
* Xóa sản phẩm
* Cập nhật số lượng
* Tạo collection + model
* Giao diện
* Lưu vào database
* Trang đặt hàng thành công

### 👉 User auth nâng cao

* Collection users
* Đăng ký
* Đăng nhập
* Đăng xuất
* Quên mật khẩu (2 phần)
* Hiển thị thông tin user
* Lưu thêm user_id vào carts

### 👉 Admin system

* Cài đặt chung
* Dashboard
* Trang 404

### 👉 Chat realtime

* Giao diện chat
* Cài đặt
* Tối ưu source code
* Tạo collection chats
* Tính năng chat cơ bản
* Hiển thị realtime
* Fix chat scroll bottom
* Icon, Typing

### 👉 Upload nhiều ảnh

* Chèn nhiều ảnh (3 phần)
* Hiển thị ảnh Full

### 👉 User list

* Hiển thị danh sách user
* Phân tích chức năng (Phần 1)

Fix /admin

</details>

---

## 📧 Liên hệ
Email: lequangtuyen543@gmail.com
