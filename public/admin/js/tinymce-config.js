tinymce.init({
  selector: 'textarea.textarea-mce',
  plugins: 'lists link image preview code',
  file_picker_callback: function (cb, value, meta) {
    // Tạo input chọn file
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    // Khi người dùng chọn file
    input.onchange = function () {
      var file = this.files[0];
      var reader = new FileReader();
      reader.onload = function () {
        // Tạo ID blob duy nhất
        var id = 'blobid' + (new Date()).getTime();
        // Lấy blobCache từ editor hiện tại
        var blobCache = tinymce.activeEditor.editorUpload.blobCache;
        // Lấy phần base64 từ kết quả đọc file
        var base64 = reader.result.split(',')[1];
        // Tạo blobInfo chứa dữ liệu file
        var blobInfo = blobCache.create(id, file, base64);
        // Thêm blobInfo vào cache
        blobCache.add(blobInfo);
        // Gọi callback để chèn ảnh vào trình soạn thảo
        cb(blobInfo.blobUri(), { title: file.name });
      };
      // Đọc file dưới dạng base64
      reader.readAsDataURL(file);
    };
    // Mở hộp thoại chọn file
    input.click();
  }
});