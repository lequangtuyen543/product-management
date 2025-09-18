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