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
// console.log(buttonStatus);