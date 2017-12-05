chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  chrome.tabs.getSelected(null, function(tab) {
    broadcast(tab);
  });
}

function broadcast(tab) {
  chrome.tabs.sendMessage(tab.id, {
    url: tab.url
  });
}
