// const { set } = require("mongoose");

const buttonStatus = document.querySelectorAll('[button-status]');
if (buttonStatus.length > 0) {
  buttonStatus.forEach(button => {
    button.addEventListener('click', (e) => {
      let url = new URL(window.location.href);
      const status = e.target.getAttribute('button-status');
      if (status === '') {
        url.searchParams.delete('status');
      } else {
        url.searchParams.set('status', status);
      }
      window.location.href = url.href;
    });
  });
}

// Form Search 
const formSearch = document.querySelector('#form-search');
if (formSearch) {
  let url = new URL(window.location.href);
  formSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value;
    if (keyword === '') {
      url.searchParams.delete('keyword');
    } else {
      url.searchParams.set('keyword', keyword);
    }
    window.location.href = url.href;
  });
}

// Pagination
const buttonPagination = document.querySelectorAll('[button-pagination]');
if (buttonPagination.length > 0) {
  buttonPagination.forEach(button => {
    button.addEventListener('click', (e) => {
      let url = new URL(window.location.href);
      const page = e.target.getAttribute('button-pagination');
      url.searchParams.set('page', page);
      window.location.href = url.href;
    });
  });
}

// Checkbox Multi
const checkboxMulti = document.querySelector('[checkbox-multi]');
if (checkboxMulti) {
  const inputCheckAll = checkboxMulti.querySelector('input[name="checkall"]');
  const inputsId = checkboxMulti.querySelectorAll('input[name="id"]');

  inputCheckAll.addEventListener('click', (e) => {
    if (inputCheckAll.checked) {
      inputsId.forEach(input => input.checked = true);
    } else {
      inputsId.forEach(input => input.checked = false);
    }
  });

  inputsId.forEach((input) => {
    input.addEventListener('click', (e) => {
      const countChecked = checkboxMulti.querySelectorAll('input[name="id"]:checked').length;

      if (countChecked === inputsId.length) {
        inputCheckAll.checked = true;
      } else {
        inputCheckAll.checked = false;
      }
    });
  });
}
// End Checkbox Multi

// Form Change Multi 
const formChangeMulti = document.querySelector('[form-change-multi]');
if (formChangeMulti) {
  formChangeMulti.addEventListener('submit', (e) => {
    e.preventDefault();

    const checkboxMulti = document.querySelector('[checkbox-multi]');
    const inputsChecked = checkboxMulti.querySelectorAll('input[name="id"]:checked');

    const typeChange = e.target.elements.type.value;

    if (typeChange === 'delete-all') {
      const isConfirm = confirm('Are you sure to delete selected items?');
      if (!isConfirm) {
        return;
      }
    }

    if (inputsChecked.length > 0) {
      let ids = [];
      const inputIds = formChangeMulti.querySelector('input[name="ids"]');

      inputsChecked.forEach(input => {
        const id = input.value;

        if (typeChange == "change-position") {
          const position = input.closest('tr').querySelector('input[name="position"]').value;

          ids.push(`${id}-${position}`);
        } else {
          ids.push(id);
        }
      });

      inputIds.value = ids.join(', ');

      formChangeMulti.submit();
    } else {
      alert('Please select at least one item.');
    }
  });
}
// End Form Change Multi 

// Show Alert 
const showAlert = document.querySelector('[show-alert]');
if (showAlert) {
  const time = parseInt(showAlert.getAttribute('data-time'));
  const closeAlert = showAlert.querySelector('[close-alert]');

  setTimeout(() => {
    showAlert.classList.add('alert-hidden');
  }, time);

  closeAlert.addEventListener('click', (e) => {
    showAlert.classList.add('alert-hidden');
  });
}
// End Show Alert 

// Upload Image 
const uploadImage = document.querySelector('[upload-image]');
if (uploadImage) {
  const uploadImageInput = document.querySelector('[upload-image-input]');
  const uploadImagePreview = document.querySelector('[upload-image-preview]');

  uploadImageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImagePreview.src = URL.createObjectURL(file);
    }
  })
}
// End Upload Image 
