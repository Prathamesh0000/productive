var bkg = chrome.extension.getBackgroundPage();

chrome.history.onVisited.addListener(function (visitedData) {
  const key = 'extensionData';
  chrome.storage.sync.get(key, function (result) {
    const data = (result[key] && (result[key] instanceof Array)) ? (result[key].push(visitedData), result[key]) : [visitedData];
    // bkg.console.log('Value is set to ' ,  data );
    chrome.storage.sync.set({
      [key]: data
    }, function () {
      bkg.console.log('Value is set to ', data);
    });
  });
});