import { TARGET_URL, URL_CLASS, FETCH_CLASS } from './constants.js';

chrome.runtime.onMessage.addListener(onMessage);

function onMessage(message, sender, sendResponse) {
  chrome.storage.local.set({ myURL: message.url }, function() {
    window.open(TARGET_URL, "_blank").focus();
  });
}

chrome.storage.local.get(["myURL"], function(items) {
  if (window.location.href === TARGET_URL) {
    if (items && items.myURL) {
      let targetElement = document.getElementById(URL_CLASS);
      let fetchElement = document.getElementById(FETCH_CLASS);
      if (targetElement) {
        targetElement.value = items.myURL;
        if (fetchElement) fetchElement.click();
        chrome.storage.local.remove(["myURL"]);
      }
    }
  }
});
