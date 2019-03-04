let state = false;

chrome.browserAction.onClicked.addListener(function (tab) {
  if (!state) {
    chrome.tabs.insertCSS(null, {
      file: "darkmode.css"
    });
    state = !state;
    return;
  }
  chrome.tabs.insertCSS(null, {
    file: "lightmode.css"
  });
  state = !state;
});