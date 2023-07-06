'use strict';

import './popup.css';

const MESSAGE_CONTENT_TEXTAREA = document.getElementById('message-content');
const SEND_BTN = document.getElementById('sendBtn');

let token = ''

const sendMessage = (message) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  var formData = new FormData();
  formData.append("message", `\n${message}`);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formData,
    redirect: 'follow'
  };

  fetch("https://notify-api.line.me/api/notify", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

(function () {
  function setNotifier() {
    SEND_BTN.addEventListener('click', () => {
      sendMessage(MESSAGE_CONTENT_TEXTAREA.value)
    });
  }

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentTab = tabs[0];
    const currentTitle = currentTab.title;
    const currentUrl = currentTab.url;

    MESSAGE_CONTENT_TEXTAREA.value = `${currentTitle}\n${currentUrl}`
  });

  chrome.storage.local.get(["key"]).then((result) => {
    token = result.key;
  });

  document.addEventListener('DOMContentLoaded', setNotifier);
})();
