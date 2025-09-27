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

    if (inputsChecked.length > 0) {
      let ids = [];
      const inputIds = formChangeMulti.querySelector('input[name="ids"]');

      inputsChecked.forEach(input => ids.push(input.value));

      inputIds.value = ids.join(', ');

      formChangeMulti.submit();
    }else{
      alert('Please select at least one item.');
    }
  });
}
// End Form Change Multi 
