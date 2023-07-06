'use strict';

async function setSetting(name, value) {
	return new Promise(resolve => chrome.storage.local.set({ [name]: value }, result => resolve(result)));
}

chrome.runtime.onMessage.addListener((request) => {
  console.log('................')
  if (request.type === 'OPTION') {
    setSetting(request.name, request.value)
  }
  return true;
});
