/* global document, chrome, open */

const ACCESS_TOKEN_INPUT = document.getElementById("accessToken");
const STATUS = document.getElementById("status");

const saveOptions = () => {
  const accessToken = ACCESS_TOKEN_INPUT.value;
  chrome.storage.local.set({ key: accessToken }).then(() => {
    STATUS.innerText = "Access token is set";
  });
}

const restoreOptions = () => {
  chrome.storage.local.get(["key"]).then((result) => {
    ACCESS_TOKEN_INPUT.value = result.key;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
