import * as Popper from 'https://cdn.jsdelivr.net/npm/@popperjs/core@^2/dist/esm/index.js'

// CLIENT_SEND_MASSAGE
const formSendData = document.querySelector('.chat .inner-form');
if (formSendData) {
  formSendData.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value;
    if (content) {
      socket.emit('CLIENT_SEND_MASSAGE', content);
      e.target.elements.content.value = "";
    }
  })
}
// End CLIENT_SEND_MASSAGE

// SERVER_RETURN_MESSAGE
socket.on('SERVER_RETURN_MESSAGE', (data) => {
  const myId = document.querySelector('[my-id]').getAttribute('my-id')
  const body = document.querySelector('.chat .inner-body');

  const div = document.createElement('div');
  let htmlFullName = ''

  if (myId == data.userId) {
    div.classList.add('inner-outgoing')
  } else {
    htmlFullName = `<div class="inner-name">${data.fullName}</div>`
    div.classList.add('inner-incoming')
  }

  div.innerHTML = `
    ${htmlFullName}
    <div class="inner-content">${data.content}</div>
  `;

  body.appendChild(div);

  body.scrollTop = body.scrollHeight;
})
// End SERVER_RETURN_MESSAGE

// Scroll Chat To Bottom 
const bodyChat = document.querySelector('.chat .inner-body')
if (bodyChat) {
  bodyChat.scrollTop = bodyChat.scrollHeight;
}
// End Scroll Chat To Bottom 

// Show Icon 
// Show Popup 
const buttonIcon = document.querySelector('.button-icon')
if (buttonIcon) {
  const tooltip = document.querySelector('.tooltip')
  Popper.createPopper(buttonIcon, tooltip)

  buttonIcon.onclick = () => {
    tooltip.classList.toggle('shown')
  }
}
// End Show Popup 

// Insert Icon Input
const emojiPicker = document.querySelector('emoji-picker');
if (emojiPicker) {
  const inputChat = document.querySelector(".chat .inner-form input[name='content']");
  emojiPicker.addEventListener('emoji-click', (event) => {
    const icon = event.detail.unicode;
    inputChat.value = inputChat.value + icon;
  })
}
// End Insert Icon Input
// End Show Icon Chat